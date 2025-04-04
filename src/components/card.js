import React from "react";
import "./card.css";
import { FaRegFileAlt } from "react-icons/fa";

const Card = (props) => {
  return (
    <div>
      <div className="container cards">
        <div className="card">
          <FaRegFileAlt size={24} color="black" />
          <h4 className="title">Отчет за II квартал 2024 года</h4>
          <div className="flex-div">
            <p>PDF, 440 Kb</p>
            <div className="icon">x</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
