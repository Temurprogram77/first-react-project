import React from "react";
import "./card.css";
import { FaRegFileAlt, FaCheck, FaTimes } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="card">
      <FaRegFileAlt size={24} color="black" />
      <h4 className="title">{props.cardTitle}</h4>
      <div className="flex-div">
        <p>{props.cardVolume}</p>
        <div className="icon">{props.download===true?<FaCheck color="green" />: <FaTimes color="red" />}</div>
      </div>
    </div>
  );
};

export default Card;
