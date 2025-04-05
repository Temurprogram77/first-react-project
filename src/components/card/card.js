import React from "react";
import "./card.css";
import { FaRegFileAlt, FaCheck, FaTimes } from "react-icons/fa";

const Card = (props) => {
  const {cardTitle,cardVolume,download}=props;
  return (
    <div className="card">
      <FaRegFileAlt size={24} color="black" />
      <h4 className="title">{cardTitle}</h4>
      <div className="flex-div">
        <p>{cardVolume}</p>
        <div className="icon">{download===true?<FaCheck color="green" />: <FaTimes color="red" />}</div>
      </div>
    </div>
  );
};

export default Card;
