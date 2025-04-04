import React from "react";
import ReactDOM from "react-dom/client";
import icon from "./assets/images/logo.svg";
import { FaRegFileAlt } from "react-icons/fa";
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
    download: false,
  },
  {
    cardTitle: "Отчет за III квартал 2023 года",
    cardVolume: "PDF, 425 Kb",
    download: true,
  },
  {
    cardTitle: "Отчет за II квартал 2023 года",
    cardVolume: "PDF, 408 Kb",
    download: false,
  },
  {
    cardTitle: "Годовой отчет по итогам 2022 года (26.05.2023)",
    cardVolume: "PDF, 667 Kb",
    download: true,
  },
  {
    cardTitle: "Отчет за I квартал 2023 года",
    cardVolume: "PDF, 415 Kb",
    download: true,
  },
  {
    cardTitle: "Отчет за III квартал 2022 года",
    cardVolume: "PDF, 479 Kb",
    download: false,
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
