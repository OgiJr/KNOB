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
            <Link to="/blog-list-view">Новини</Link>
          </li>
          <li>
            <Link to="/business-consulting-2">Изпити и курсове</Link>
          </li>
          <li>
            <Link to="/corporate">Архив</Link>
          </li>
        </ul>
      </li>
      <li className="has-droupdown">
        <Link to="#">Управителни органи</Link>
        <ul className="submenu">
          <li>
            <Link to="/blog-list-view">Упрваителен съвет</Link>
          </li>
          <li>
            <Link to="/business-consulting-2">Контролен съвет</Link>
          </li>
          <li>
            <Link to="/corporate">Комисия по професионална етика</Link>
          </li>
        </ul>
      </li>
      <li className="with-megamenu">
        <Link to="#">Регионални колегии</Link>
        <div className="rn-megamenu">
          <div className="wrapper">
            <div className="row row--0">
              <div className="col-lg-3 single-mega-item">
                <ul className="mega-menu-item">
                  <li>
                    <p>
                      <b>Бургас, Сливен и Ямбол</b> <span className="rn-badge-card">1</span>
                    </p>
                  </li>
                  <li>
                    <Link to="/button">Информация</Link>
                  </li>
                  <li>
                    <Link to="/service">Членове</Link>
                  </li>
                  <li>
                    <Link to="/counter">Решения</Link>
                  </li>
                  <li>
                    <Link to="/progressbar">Публикации</Link>
                  </li>
                  <li>
                    <br></br>
                    <p>
                      <b>Варна</b> <span className="rn-badge-card">2</span>
                    </p>
                  </li>
                  <li>
                    <Link to="/button">Информация</Link>
                  </li>
                  <li>
                    <Link to="/service">Членове</Link>
                  </li>
                  <li>
                    <Link to="/counter">Решения</Link>
                  </li>
                  <li>
                    <Link to="/progressbar">Публикации</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 single-mega-item">
                <ul className="mega-menu-item">
                  <li>
                    <p>
                      <b>Плевен, Ловеч</b> <span className="rn-badge-card">3</span>
                    </p>
                  </li>
                  <li>
                    <Link to="/button">Информация</Link>
                  </li>
                  <li>
                    <Link to="/service">Членове</Link>
                  </li>
                  <li>
                    <Link to="/counter">Решения</Link>
                  </li>
                  <li>
                    <Link to="/progressbar">Публикации</Link>
                  </li>
                  <li>
                    <br></br>
                    <p>
                      <b>Пловдив</b> <span className="rn-badge-card">4</span>
                    </p>
                  </li>
                  <li>
                    <Link to="/button">Информация</Link>
                  </li>
                  <li>
                    <Link to="/service">Членове</Link>
                  </li>
                  <li>
                    <Link to="/counter">Решения</Link>
                  </li>
                  <li>
                    <Link to="/progressbar">Публикации</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 single-mega-item">
                <ul className="mega-menu-item">
                  <li>
                    <p>
                      <b>София - град и София - област</b> <span className="rn-badge-card">5</span>
                    </p>
                  </li>
                  <li>
                    <Link to="/button">Информация</Link>
                  </li>
                  <li>
                    <Link to="/service">Членове</Link>
                  </li>
                  <li>
                    <Link to="/counter">Решения</Link>
                  </li>
                  <li>
                    <Link to="/progressbar">Публикации</Link>
                  </li>
                  <li>
                    <br></br>
                    <p>
                      <b>Русе</b> <span className="rn-badge-card">6</span>
                    </p>
                  </li>
                  <li>
                    <Link to="/button">Информация</Link>
                  </li>
                  <li>
                    <Link to="/service">Членове</Link>
                  </li>
                  <li>
                    <Link to="/counter">Решения</Link>
                  </li>
                  <li>
                    <Link to="/progressbar">Публикации</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 single-mega-item">
                <ul className="mega-menu-item">
                  <li>
                    <p>
                      <b>Стара Загора</b> <span className="rn-badge-card">7</span>
                    </p>
                  </li>
                  <li>
                    <Link to="/button">Информация</Link>
                  </li>
                  <li>
                    <Link to="/service">Членове</Link>
                  </li>
                  <li>
                    <Link to="/counter">Решения</Link>
                  </li>
                  <li>
                    <Link to="/progressbar">Публикации</Link>
                  </li>
                  <li>
                    <br></br>
                    <p>
                      <b>Шумен, Търговище, Разград</b> <span className="rn-badge-card">8</span>
                    </p>
                  </li>
                  <li>
                    <Link to="/button">Информация</Link>
                  </li>
                  <li>
                    <Link to="/service">Членове</Link>
                  </li>
                  <li>
                    <Link to="/counter">Решения</Link>
                  </li>
                  <li>
                    <Link to="/progressbar">Публикации</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="has-droupdown">
        <Link to="#">Нормативна база и документи</Link>
        <ul className="submenu">
          <li>
            <Link to="/blog-grid">Нормативни актове</Link>
          </li>
          <li>
            <Link to="/blog-grid-sidebar">Стандарти за оценяване</Link>
          </li>
          <li>
            <Link to="/blog-list-view">Вътрешнонормативни актове</Link>
          </li>
          <li>
            <p style={{ fontSize: "13px", textAlign: "center", marginBottom: "0px", marginTop: "4px" }}>
              <b>Решения на управителните органи</b>
            </p>
            <Link to="/blog-list-sidebar">Управителен съвет</Link>
            <Link to="/blog-list-sidebar">Контролен съвет</Link>
            <Link to="/blog-list-sidebar">КПЕ</Link>
          </li>
        </ul>
      </li>

      <li className="has-droupdown">
        <Link to="#">REV</Link>
        <ul className="submenu">
          <li>
            <Link to="/portfolio">Информация и документи</Link>
          </li>
          <li>
            <Link to="/portfolio-three-column">TEGoVa</Link>
          </li>
        </ul>
      </li>
      <li className="has-droupdown">
        <Link to="#">Помощ</Link>
        <ul className="submenu">
          <li>
            <Link to="/portfolio">Работа със сайта</Link>
          </li>
          <li>
            <Link to="/portfolio-three-column">ЧЗВ</Link>
          </li>
          <li>
            <Link to="/portfolio">Мерни единици</Link>
          </li>
          <li>
            <Link to="/portfolio-three-column">Карта на сайта</Link>
          </li>
          <li>
            <Link to="/portfolio-three-column">Полезни връзки</Link>
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
