import { useState, React, useEffect } from "react";

const CharactersStark = ({ characters }) => {
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
        console.log("every characters data", data);
      });
  }, [characters]);

  const nameOfCharacter = characterInfo.map((data, index) => {
    return <li id={index}>{data.name}</li>;
  });

  return <div class="characters">{nameOfCharacter}</div>;
};
export default CharactersStark;
