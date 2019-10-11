import React from "react";

const InfoCard = props => {
  console.log(props);
  return (
    <div className="Info-card " key={props.id}>
      <img className="Character-image" alt="random character" src={props.imgUrl} />
      <h2>{props.Name}</h2>
    </div>
  );
};
export default InfoCard;
