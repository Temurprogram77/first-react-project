import React from "react";
import card from "../../assets/images/visa.webp";
import "./cards.css";

function Cards() {
  return (
    <div className="container">
      <div className="card">
        <div className="left_part">
          <div className="btns">
            <div className="first_btn">Для путешествий</div>
            <div className="first_btn">USD</div>
            <div className="first_btn">EUR</div>
          </div>
          <h2>Visa Classic</h2>
          <div className="writing"></div>
          <div className="button">Подробнее</div>
        </div>
        <div className="right_part">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
