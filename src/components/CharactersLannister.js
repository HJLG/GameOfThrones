import { useState, React, useEffect } from "react";

const CharactersLannister = ({ characters }) => {
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

  // const info = characterInfo.map((data) => {
  //   return <li>{data.gender}</li>;
  // });

  const nameOfCharacter = characterInfo.map((data, index) => {
    return <li id={index}>{data.name}</li>;
  });

  return <div>{nameOfCharacter}</div>;
};

export default CharactersLannister;