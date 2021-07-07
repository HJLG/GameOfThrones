import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Books = () => {
  const { books } = useParams();
  const booksApi = `https://www.anapioficeandfire.com/api/books/${books}`;
  const [information, setInformation] = useState(null);
  const publisher = information?.publisher;
  const country = information?.country;
  const released = information?.released;
  const title = information?.name;
  const charactersBooks = information?.characters;
  const characterMapped = charactersBooks?.map((data) => {
    const splitAgain = data.split("/");
    const oneMoreTime = splitAgain[splitAgain.length - 1];
    return (
      <li>
        <Link to={`/${oneMoreTime}`}>{data}</Link>
      </li>
    );
  });
  const authorsMapping = information?.authors;
  const authors = authorsMapping?.map((data) => {
    return <li>{data}</li>;
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
        console.log(data);
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
