import React from "react";
import { useEffect, useState } from "react";
import CharactersLannister from "./CharactersLannister";

const url =
  "https://anapioficeandfire.com/api/houses?name=House%20Lannister%20of%20Casterly%20Rock";

const HouseLannister = () => {
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
        <p>Region = {data.region}</p>
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
      <h3>Sworn Members of House Lannister</h3>
      <CharactersLannister characters={characters} />
    </>
  );
};

export default HouseLannister;
