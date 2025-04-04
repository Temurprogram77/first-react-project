import React from "react";
import "./cards.css";

function Cards() {
  return (
    <div className="container">
      <div className="card">
        <div className="left_part">
          <div className="btns">
            <div className="first_btn">Для путешествий</div>
          </div>
          <h2>Visa Classic</h2>
          <div className="writing"></div>
          <div className="button">Подробнее</div>
        </div>
        <div className="right_part"></div>
      </div>
    </div>
  );
}

export default Cards;
