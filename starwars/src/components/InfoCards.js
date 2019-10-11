// import React from "react";

// const InfoCards = props => {
//   console.log(props);
//   return (
//     <div className="Info-card" key={props.id}>
//       <h2>{props.Name}</h2>
//     </div>
//   );
// };
// export default InfoCards;

import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Col } from "reactstrap";
const InfoCards = props => {
  return (
    <Col xs="6" sm="4" key={props.id}>
      <Card>
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <CardText>{props.gender}</CardText>
          <CardSubtitle>Home World:{props.homeworld}</CardSubtitle>
          <CardSubtitle>Species<small className="text-warning">{props.species}</small></CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
};
export default InfoCards;

