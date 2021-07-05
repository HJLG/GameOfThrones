import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Information = () => {
  const { id } = useParams();
  const url = `https://www.anapioficeandfire.com/api/characters/${id}`;
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Server Bad Response");
      })
      .then((data) => {
        setInfo(data);
      });
  }, []);

  const characterAliases = info?.aliases;
  const characterTv = info?.tvSeries;

  console.log(characterAliases);

  const charAlias = characterAliases?.map((data) => {
      return (
          <li>{data}</li>
      )
  })

  const charTv = characterTv?.map((data) => {
      return (
          <li>{data}</li>
      )
  })

  return (
    <>
      <h1>{info.name}</h1>
      <p>Gender : {info.gender}</p>
      <p>Culture : {info.culture}</p>
      <p>Born : {info.born}</p>
      <p>Died : {info.died}</p>
      <p>Aliases : {charAlias}</p>
      <p>Appearred in the TV series :{charTv}</p>
      <p>Played by {info.playedBy}</p>
    </>
  );
};
export default Information;
