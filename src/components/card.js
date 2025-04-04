import React from "react";

const Card = (props) => {
  return (
    <div>
        <div className="cards">
            <FaRegFileAlt size={24} color="black" />
            <h4 className="title">Отчет за II квартал 2024 года</h4>
            <div className="flex-div">
                <p>PDF, 440 Kb</p>
                <div className="">x</div>
            </div>
        </div>
    </div>
  );
};

export default Card;
