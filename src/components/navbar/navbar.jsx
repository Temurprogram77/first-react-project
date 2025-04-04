import React from "react";
import icon from "../../assets/images/logo.svg";
import "./navbar.css";

function Navbar() {
  return (
    <div className="container box">
      <div className="left_part">
        <a href="#">
          <img src={icon} alt="HamkorBank" />
        </a>
        <div className="pages">
          <a href="#">Кредиты</a>
          <a href="#">Карты</a>
          <a href="#">Микрозаймы</a>
          <a href="#">Вклады</a>
          <a href="#">Курс валют</a>
          <a href="#">Еще</a>
        </div>
      </div>
      <div className="right_part">
        <div className="money">
          ${" "}
          <div className="first">
            <span>Купить</span> 12 860
          </div>
          <div className="second">
            {" "}
            <span>Продать</span> 12 970
          </div>
        </div>
        <div className="btn">Интернет-банк</div>
      </div>
    </div>
  );
}

export default Navbar;
