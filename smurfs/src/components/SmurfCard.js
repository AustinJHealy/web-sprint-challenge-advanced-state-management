import React from "react";

const SmurfCard = (props) => {
  return (
    <div className="smurf">
      <h1>Name: {props.data.name} Smurf</h1>
      <h3>Age: {props.data.age}</h3>
      <h3>Height: {props.data.height}</h3>
    </div>
  );
};

export default SmurfCard;