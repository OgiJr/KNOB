import React from "react";
import { Link } from "react-router-dom";

const NavAdmin = () => {
  return (
    <ul className="mainmenu">
      <li className="has-droupdown">
        <Link to="#">Новини</Link>
        <ul className="submenu">
          <li>
            <Link to="/dashboard-admin">КНОБ новини</Link>
          </li>
          <li>
            <Link to="/dashboard-international">Международни новини</Link>
          </li>
        </ul>
      </li>
      <li className="has-droupdown">
        <Link to="#">Обучения</Link>
        <ul className="submenu">
          <li>
            <Link to="/dashboard-seminars">Обучения</Link>
          </li>
          <li>
            <Link to="/dashboard-courses">Курсове</Link>
          </li>
          <li>
            <Link to="/dashboard-qualifications">Квалификация</Link>
          </li>
        </ul>
      </li>
      <li className="has-droupdown">
        <Link to="#">Членове на съвети</Link>
        <ul className="submenu">
          <li>
            <Link to="/members-methodology">Методология и квалификация</Link>
          </li>
          <li>
            <Link to="/members-us">УС</Link>
          </li>
          <li>
            <Link to="/members-ks">КС</Link>
          </li>
          <li>
            <Link to="/members-kpe">КПЕ</Link>
          </li>
          <li>
            <Link to="/members-rc">Регионални колегии</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/dashboard-standards">Стандарти по оценяване</Link>
      </li>
      <li className="has-droupdown">
        <Link to="#">Ресурси</Link>
        <ul className="submenu">
          <li>
            <Link to="/dashboard-literature">Литература</Link>
          </li>
          <li>
            <Link to="/dashboard-publications">Публикации</Link>
          </li>
        </ul>
      </li>
      <li className="has-droupdown">
        <Link to="#">Документи</Link>
        <ul className="submenu">
          <li>
            <Link to="/dashboard-us">Протоколи УС</Link>
          </li>
          <li>
            <Link to="/dashboard-ks">Протоколи КС</Link>
          </li>
          <li>
            <Link to="/dashboard-kpe">Протоколи КПЕ</Link>
          </li>
          <li>
            <Link to="/dashboard-os">Протоколи ОС</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/dashboard-rev">REV</Link>
      </li>
      <li>
        <Link to="/dashboard-registry">Публичен регистър</Link>
      </li>
      <li>
        <Link to="/dashboard-companies">Юридически лица</Link>
      </li>
    </ul>
  );
};
export default NavAdmin;
