import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./components/card/card.js";
import Navbar from "./components/navbar/navbar.js";
import Footer from "./components/footer/footer.js";

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
    download: false,
  },
  {
    cardTitle: "Годовой отчет по итогам 2023 года (17.05.2024)",
    cardVolume: "PDF, 440 Kb",
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
];

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <h2 style={{margin: '20px auto', width: '1200px', fontSize: '40px', fontWeight: '500'}}>Отчеты</h2>
      <div className="container cards">
        {base.map((card) => {
          return <Cards {...card} id={card.id} />;
        })}
      </div>
      <Footer />
    </React.Fragment>
  );
};


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<Home />);
