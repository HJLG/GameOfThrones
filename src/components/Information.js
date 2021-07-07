import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Male, Female } from "react-gender";
import { Link } from "react-router-dom";

const Information = () => {
  const { id } = useParams();
  const api = `https://www.anapioficeandfire.com/api/characters/${id}`;
  const [info, setInfo] = useState([]);
  const [spouseName, setSpouseName] = useState(null);

  const characterAliases = info?.aliases;
  const characterTv = info?.tvSeries;
  const characterTitles = info?.titles;

  const charAlias = characterAliases?.map((data) => {
    return <li>{data}</li>;
  });
  const charTv = characterTv?.map((data) => {
    return <li>{data}</li>;
  });
  const charTitles = characterTitles?.map((data) => {
    return <li>{data}</li>;
  });

  useEffect(() => {
    fetch(api)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Server Bad Response");
      })
      .then((data) => {
        setInfo(data);
        fetch(data.spouse)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((data) => {
            setSpouseName(data.name);
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [api]);

  const gender = () => {
    if (info.gender === "Male") {
      return (
        <div className="male">
          <Male color="#419fcf" />;
        </div>
      );
    } else {
      return (
        <div className="female">
          <Female color="#f378ac" className="female" />;
        </div>
      );
    }
  };

  // const spouseOfCharacter = characterInfo.map((data) => {
  //   const split = data.url.split("/");
  //   const splitteded = split[split.length - 1];
  //   return (
  //     <p>
  //       <Link to={splitteded}>{data.name}</Link>
  //     </p>
  //   );
  // });

  const split = info?.spouse?.split("/");
  const splitted = split?.pop();

  return (
    <>
      <h1>{info.name}</h1>
      <p>
        Gender : {info.gender}
        {gender()}
      </p>
      <p>
        Spouse : <Link to={splitted}>{spouseName}</Link>
      </p>
      <p>Father : {info.father}</p>
      <p>Mother : {info.mother}</p>
      <p>Culture : {info.culture}</p>
      <p>Titles : {charTitles}</p>
      <p>Born : {info.born}</p>
      <p>Died : {info.died}</p>
      <p>Aliases : {charAlias}</p>
      <p>Appeared in the TV series :{charTv}</p>
      <p>Played by {info.playedBy}</p>
      {/* <Spouse info = {info}/> */}
    </>
  );
};
export default Information;
