import React, { useEffect, useState } from "react";
import axios from "axios";
import InfoCard from "./InfoCards";

export default function InfoGrid() {
  const [infoData, setInfoData] = useState([]);
  const [character, setCharacter] = useState("mix");

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        setInfoData(response.data.message);
      })
      .catch(error => {
        console.log("The radar, sir! It appears to be:", error);
      });
  }, [character]);

  return (
    <div className="container">
      <button onClick={() => setCharacter("mastiff")}>Next</button>
      <button onClick={() => setCharacter("labrador")}>Previous</button>
      <div className="entry">
        {infoData.map(item => {
          return <PetCard key={item} character={name} imgUrl={item} />;
        })}
      </div>
    </div>
  );
}