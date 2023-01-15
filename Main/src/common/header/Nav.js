import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Nav = () => {
  const { user } = useAuth();

  return (
    <ul className="mainmenu">
      <li className="has-droupdown">
        <Link to="/about-us">За нас</Link>
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
      <li>
        <Link to="/blog-news">Актуални новини</Link>
      </li>
      <li className="has-droupdown">
        <Link to="#">Обучения, курсове и квалификация</Link>
        <ul className="submenu">
          <li>
            <Link to="/seminars">Обучения</Link>
          </li>
          <li>
            <Link to="/courses">Курсове</Link>
          </li>
          <li>
            <Link to="/qualifications">Квалификация</Link>
          </li>
          <li>
            <Link to="/qualification-committee">Съвет по методология и квалификация</Link>
          </li>
        </ul>
      </li>
      <li className="has-droupdown">
        <Link to="#">Стандарти</Link>
        <ul className="submenu">
          <li>
            <Link to="/valuation-standards">Български стандарти за оценяване</Link>
          </li>
          <li>
            <Link to="/valuation-standards-eu">Европейски стандарти за оценяване</Link>
          </li>
        </ul>
      </li>
      <li className="has-droupdown">
        <Link to="#">Ресурси</Link>
        <ul className="submenu">
          <li>
            <Link to="/literature">Литература</Link>
          </li>
          <li>
            <Link to="/publications">Публикации</Link>
          </li>
        </ul>
      </li>
      <li className="has-droupdown">
        <Link to="#">Международна дейност</Link>
        <ul className="submenu">
          <li>
            <a href="https://tegova.org/" target="_blank" rel="norefferer noreferrer">
              TEGoVa
            </a>
          </li>
          <li>
            <Link to="/rev">Новини</Link>
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
            <Link to="/stara-zagora">Стара Загора</Link>
          </li>
          <li>
            <Link to="/shumen">Шумен, Търговище, Разград</Link>
          </li>
        </ul>
      </li>
      {user && (
        <li className="has-droupdown">
          <Link to="#">Документи</Link>
          <ul className="submenu">
            <li>
              <Link to="/us">Протоколи УС</Link>
            </li>
            <li>
              <Link to="/ks">Протоколи КС</Link>
            </li>
            <li>
              <Link to="/kpe">Протоколи КПЕ</Link>
            </li>
            <li>
              <Link to="/os">Протоколи ОС</Link>
            </li>
          </ul>
        </li>
      )}
      <li className="has-droupdown">
        <Link to="/contact">Контакти</Link>
      </li>
    </ul>
  );
};
export default Nav;
