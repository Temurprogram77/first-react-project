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
          <div className="writing">
            <div className="one">
              <h3>бесплатно</h3>
              <p>Оформление карты</p>
            </div>
            <div className="two">
              <h3>без комиссии</h3>
              <p>
                Снятие наличных, переводы и оплата через терминалы Hamkorbank
              </p>
            </div>
            <div className="three">
              <h3>быстрые переводы</h3>
              <p>
              Отправим в течение минуты
              </p>
            </div>
          </div>
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
