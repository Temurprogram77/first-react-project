import React from "react";
import appBank from "../../assets/images/mobile_app.svg";
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa";
import "./style.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="main">
          <div className="writing">
            <div className="first_wrt">
              <h2>0 (800) 1 200 200, 1256</h2>
              <p>Колл центр</p>
              <h2>+ 998 (78) 150 91 25</h2>
              <p>Телефон доверия</p>
            </div>
            <div className="second_wrt">
              <h4>Отделения и банкоматы</h4>
              <h4>Курсы валют</h4>
              <h4>Личный кабинет</h4>
              <h4>Обратная связь</h4>
            </div>
            <div className="third_wrt">
              <h4>Частным лицам</h4>
              <h4>Для бизнеса</h4>
              <h4>Фин. организациям</h4>
              <h4>О банке</h4>
            </div>
            <div className="fourth_wrt">
              <h4>Пресс-центр</h4>
              <h4>Реквизиты</h4>
              <h4>Интернет банкинг</h4>
            </div>
          </div>
          <div className="bank">
            <img src={appBank} alt="" />
            <div className="wrt">
              <h3>Мобильный банк</h3>
              <p>Приложение для Android и iOS</p>
            </div>
          </div>
        </div>
        <div className="btns_main">
          <div className="send_button">Сообщить о коррупции</div>
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
          <FaTelegram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
