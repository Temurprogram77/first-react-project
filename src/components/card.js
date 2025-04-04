import React from "react";
import "./card.css";
import { FaRegFileAlt } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="card">
      <FaRegFileAlt size={24} color="black" />
      <h4 className="title">{props.cardTitle}</h4>
      <div className="flex-div">
        <p>PDF, 440 Kb</p>
        <div className="icon">x</div>
      </div>
    </div>
  );
};

export default Card;
