import React from "react";
import ReactDOM from "react-dom/client";
import icon from "./assets/images/logo.svg";
import "./style.css"

const base = [{}];

const Home = () => {
  return <Navbar />;
};

const Navbar = () => {
  return (
    <div>
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
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<Home />);
