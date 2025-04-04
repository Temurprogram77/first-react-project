import React from "react";
import card from "../../assets/images/visa.webp";
import "./cards.css";

function Cards() {
  return (
    <div className="container">
      <div className="card">
        <div className="left_party">
          <div className="btns">
            <div className="first_btn">Для путешествий</div>
            <div className="second_btn">USD</div>
            <div className="third_btn">EUR</div>
          </div>
          <h2>Visa Classic</h2>
          <div className="writing"></div>
          <div className="button">Подробнее</div>
        </div>
        <div className="right_party">
          <img src={card} alt="Visa card" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
