import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Male, Female } from "react-gender";
import { Link } from "react-router-dom";

const Information = () => {
  const { id } = useParams();
  const api = `https://www.anapioficeandfire.com/api/characters/${id}`;
  const [info, setInfo] = useState([]);
  const [spouseName, setSpouseName] = useState(null);
  const [fatherName, setFatherName] = useState(null);
  const [motherName, setMotherName] = useState(null);
  const [books, setBooks] = useState(null);

  const characterAliases = info?.aliases;
  const characterTv = info?.tvSeries;
  const characterTitles = info?.titles;
  const split = info?.spouse?.split("/");
  const splitted = split?.pop();
  const fatherSplit = info?.father?.split("/");
  const father = fatherSplit?.pop();
  const motherSplit = info?.mother?.split("/");
  const mother = motherSplit?.pop();

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
        fetch(data.father)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((data) => {
            setFatherName(data.name);
          });
        fetch(data.mother)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((data) => {
            setMotherName(data.name);
          });
        let request = data?.books?.map((data) => {
          return fetch(data);
        });
        Promise.all(request)
          .then((res) => {
            return Promise.all(res.map((r) => r.json()));
          })
          .then((data) => {
            setBooks(data);
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

  const charBooks = books?.map((data) => {
    const booksSplit = data.url.split("/");
    const booksSplitted = booksSplit[booksSplit.length - 1];
    return (
      <li>
        <Link to={`/books/${booksSplitted}`}>
          Book {booksSplitted}, {data.name}
        </Link>
      </li>
    );
  });

  // console.log("booksplit", bookMap);
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
      <p>
        Father : <Link to={father}>{fatherName}</Link>
      </p>
      <p>
        Mother : <Link to={mother}>{motherName}</Link>
      </p>
      <p>Culture : {info.culture}</p>
      <p>Titles : {charTitles}</p>
      <p>Born : {info.born}</p>
      <p>Died : {info.died}</p>
      <p>Aliases : {charAlias}</p>
      <p>Books : {charBooks}</p>
      <p>Appeared in the TV series :{charTv}</p>
      <p>Played by {info.playedBy}</p>
      {/* <Spouse info = {info}/> */}
    </>
  );
};
export default Information;
