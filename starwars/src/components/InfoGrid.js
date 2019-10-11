import React, { useEffect, useState } from "react";
import axios from "axios";
import InfoCards from "./InfoCards";
import { Container, Row} from 'reactstrap'
export default function InfoGrid() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/${people}/`)
      .then(response => {
        console.log("Character Info", response.data);
        setPeople(response.data);
      })
      .catch(error => {
        console.log("The radar, sir! It appears to be:", error);
      });
  }, []);

  return (
   <Container>
     <Row>
      {people.map(people => {
        return (
          <InfoCards
            key={people.id}
            name={people.name}
            gender={people.gender}
            homeworld={people.homeworld}
            species={people.species}
          />
        );
      })}
      </Row>
  </Container>
  );
}
