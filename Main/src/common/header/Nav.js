import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li>
        <Link to="/about-us">За нас</Link>
      </li>
      <li className="has-droupdown">
        <Link to="#">Актуално</Link>
        <ul className="submenu">
          <li>
            <Link to="/blog-news">Новини</Link>
          </li>
          <li>
            <Link to="/blog-quiz">Изпити и курсове</Link>
          </li>
          <li>
            <Link to="/blog-archive">Архив</Link>
          </li>
        </ul>
      </li>
      <li className="has-droupdown">
        <Link to="#">Управителни органи</Link>
        <ul className="submenu">
          <li>
            <Link to="/board-of-directors">Упрваителен съвет</Link>
          </li>
          <li>
            <Link to="/control-board">Контролен съвет</Link>
          </li>
          <li>
            <Link to="/ethics">Комисия по професионална етика</Link>
          </li>
        </ul>
      </li>
      <li className="has-droupdown">
        <Link to="#">Регионални колегии</Link>
        <ul className="submenu">
          <li>
            <Link to="/burgas">Бургас, Сливен Ямбол</Link>
          </li>
          <li>
            <Link to="/varna">Варна</Link>
          </li>
          <li>
            <Link to="/pleven">Плевен, Ловеч</Link>
          </li>
          <li>
            <Link to="/plovdiv">Пловдив</Link>
          </li>
          <li>
            <Link to="/ruse">Русе</Link>
          </li>
          <li>
            <Link to="/sofia">София - град и София - област</Link>
          </li>
          <li>
            <Link to="/starazagora">Стара Загора</Link>
          </li>
          <li>
            <Link to="/shumen">Шумен, Търговище, Разград</Link>
          </li>
        </ul>
      </li>

      <li className="has-droupdown">
        <Link to="#">Нормативна база и документи</Link>
        <ul className="submenu">
          <li>
            <Link to="/normative">Нормативни актове</Link>
          </li>
          <li>
            <Link to="/valuation-standards">Стандарти за оценяване</Link>
          </li>
          <li>
            <p
              style={{
                fontSize: "13px",
                textAlign: "center",
                marginBottom: "0px",
                marginTop: "4px",
              }}
            >
              <b>Решения на управителните органи</b>
            </p>
            <Link to="#">Управителен съвет</Link>
            <Link to="#">Контролен съвет</Link>
          </li>
        </ul>
      </li>

      <li className="has-droupdown">
        <Link to="#">REV</Link>
        <ul className="submenu">
          <li>
            <Link to="/rev">Информация и документи</Link>
          </li>
          <li>
            <a href="https://tegova.org/" target="_blank" rel="norefferer">
              TEGoVa
            </a>
          </li>
        </ul>
      </li>
      <li className="has-droupdown">
        <Link to="#">Помощ</Link>
        <ul className="submenu">
          <li>
            <Link to="/helpful-links">Полезни връзки</Link>
          </li>
        </ul>
      </li>
      <li className="has-droupdown">
        <Link to="/contact">Контакт</Link>
      </li>
    </ul>
  );
};
export default Nav;
