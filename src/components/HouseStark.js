import React from "react";
import { useEffect, useState } from "react";
import CharactersStark from "./CharactersStark";

const url =
  "https://www.anapioficeandfire.com/api/houses?name=House%20Stark%20of%20Winterfell";

const HouseStark = () => {
  const [house, setHouse] = useState([]);
  const [information, setInformation] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Server bad response");
      })
      .then((data) => {
        setHouse(data[0].name);
        setInformation(data);
        setCharacters(data[0].swornMembers);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const info = information.map((data) => {
    return (
      <>
        <p>region = {data.region}</p>
        <p>Coat of Arms = {data.coatOfArms}</p>
        <p>Titles = {data.titles}</p>
        <p>Seats = {data.seats}</p>
        <p>Ancestral Weapons = {data.ancestralWeapons}</p>
      </>
    );
  });

  return (
    <>
      <h1>{house}</h1>
      <h5>{info}</h5>
      <br />
      <h3>Sworn Members of House Stark</h3>
      <CharactersStark characters={characters} />
    </>
  );
};

export default HouseStark;
