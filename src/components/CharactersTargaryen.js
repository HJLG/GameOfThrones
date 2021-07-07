import { useState, React, useEffect } from "react";
import { Link } from "react-router-dom";

const CharactersTargaryen = ({ characters }) => {
  const [characterInfo, setCharactersInfo] = useState([]);

  useEffect(() => {
    let request = characters.map((data) => {
      return fetch(data);
    });
    Promise.all(request)
      .then((res) => {
        return Promise.all(res.map((r) => r.json()));
      })
      .then((data) => {
        setCharactersInfo(data);
      });
  }, [characters]);

  const nameOfCharacter = characterInfo.map((data, index) => {
    const splitty = data.url.split("/");
    const splitted = splitty[splitty.length - 1];
    if (data.aliases[0] === "") {
      return (
        <li id={index}>
          <Link to={splitted}>{data.name}</Link>
        </li>
      );
    } else {
      return (
        <li id={index}>
          <Link to={splitted}>
            {data.name}({data.aliases[0]})
          </Link>
        </li>
      );
    }
  });

  return <div class="characters">{nameOfCharacter}</div>;
};

export default CharactersTargaryen;
