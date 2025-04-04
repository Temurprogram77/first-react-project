import React from "react";
import ReactDOM from "react-dom/client";
import icon from "./assets/images/logo.svg";
import "./style.css"

const base = [
  {
    cardTitle: "Отчет за II квартал 2024 года",
    cardVolume: "PDF, 440 Kb",
    download: true,
  },
  {
    cardTitle: "Годовой отчет по итогам 2023 года (17.05.2024)",
    cardVolume: "PDF, 895 Kb",
    download: true,
  },
  {
    cardTitle: "Отчет за I квартал 2024 года",
    cardVolume: "PDF, 399 Kb",
    download: true,
  },
  {
    cardTitle: "Годовой отчет по итогам 2023 года (17.05.2024)",
    cardVolume: "PDF, 440 Kb",
    download: true,
  },
  {
    cardTitle: "Годовой отчет по итогам 2023 года (17.05.2024)",
    cardVolume: "PDF, 440 Kb",
    download: true,
  },
  {
    cardTitle: "Годовой отчет по итогам 2023 года (17.05.2024)",
    cardVolume: "PDF, 440 Kb",
    download: true,
  },
  {
    cardTitle: "Годовой отчет по итогам 2023 года (17.05.2024)",
    cardVolume: "PDF, 440 Kb",
    download: true,
  },
  {
    cardTitle: "Годовой отчет по итогам 2023 года (17.05.2024)",
    cardVolume: "PDF, 440 Kb",
    download: true,
  },
];

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
