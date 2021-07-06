import React from "react";
import { useEffect, useState } from "react";
import CharactersTargaryen from "./CharactersTargaryen";
const url =
  "https://anapioficeandfire.com/api/houses?name=House%20Targaryen%20of%20King%27s%20Landing";
const HouseTargaryen = () => {
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
      <img src="https://www.nicepng.com/png/full/55-554450_house-targaryen-sigil-sang-game-of-thrones-party.png" className="targaryensigil" alt="" />
      <h1>{house}</h1>
      <h5>{info}</h5>
      <br />
      <h3>Sworn Members of House Targaryen</h3>
      <CharactersTargaryen characters={characters} />
    </>
  );
};

export default HouseTargaryen;
