import React, { useEffect, useState } from "react";
import axios from "axios";
import InfoCards from "./InfoCards";
import { Container, Row} from 'reactstrap';
export default function InfoGrid() {
  // NOTE: The value given to useState() must be of the same type as your vale is expected to be
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log("Character Info", response.data);
        setCharacter(response.data);
      })
      .catch(error => {
        console.log("The radar, sir! It appears to be:", error);
      });
  }, []);

  return (
   <Container>
     <Row>
      {character.map(character => {
        return (
          <InfoCards
            key={character.id}
            name={character.name}
            gender={character.gender}
            homeworld={character.homeworld}
            species={character.species}
          />
        );
      })}
      </Row>
  </Container>
  );
}
