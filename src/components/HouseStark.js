import React from "react";
import { useEffect, useState } from "react";

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
        setCharacters(data[0].swornMembers)
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  console.log(information);
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
  const infoCharacters = characters.map((data) => {
    return (
        <>
        <li>{data}</li>
        </>
    )
})
  return (
    <>
      <h3>{house}</h3>
      <h5>{info}</h5>
      <h5>Characters = {infoCharacters}</h5>
    </>
  );
};

export default HouseStark;
