import React from "react";

const InfoCards = props => {
  console.log(props);
  return (
    <div className="Info-card" key={props.id}>
      <h2>{props.Name}</h2>
    </div>
  );
};
export default InfoCards;
