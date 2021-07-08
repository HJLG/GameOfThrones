import { useEffect, React, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Books = () => {
  const { books } = useParams();
  const booksApi = `https://www.anapioficeandfire.com/api/books/${books}`;
  const [information, setInformation] = useState(null);
  const [characterName, setCharacterName] = useState(null);
  const publisher = information?.publisher;
  const country = information?.country;
  const released = information?.released;
  const title = information?.name;
  const authorsMapping = information?.authors;
  const authors = authorsMapping?.map((data) => {
    return <li>{data}</li>;
  });
  const characterMapped = characterName?.map((data) => {
    const splitAgain = data.url.split("/");
    const oneMoreTime = splitAgain[splitAgain.length - 1];
    return (
      <li>
        <Link to={`/${oneMoreTime}`}>{data.name}</Link>
      </li>
    );
  });

  useEffect(() => {
    fetch(booksApi)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Server Bad Response");
      })
      .then((data) => {
        setInformation(data);
        let request = data?.characters?.map((data) => {
          return fetch(data);
        });
        Promise.all(request)
          .then((res) => {
            return Promise.all(res.map((r) => r.json()));
          })
          .then((data) => {
            setCharacterName(data);
          });
      });
  }, [booksApi]);

  return (
    <>
      <h1>Book {books}</h1>
      <h1>Title of Book: {title}</h1>
      <p>Authors: {authors}</p>
      <p>Publisher : {publisher}</p>
      <p>Country : {country}</p>
      <p>Released : {released}</p>
      <p>Characters in the Book : {characterMapped}</p>
    </>
  );
};

export default Books;
