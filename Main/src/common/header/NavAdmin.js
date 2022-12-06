import React from "react";
import { Link } from "react-router-dom";

const NavAdmin = () => {
  return (
    <ul className="mainmenu">
      <li>
        <Link to="/dashboard-admin">Новини</Link>
      </li>
      <li>
        <Link to="/dashboard-quizes">Изпити</Link>
      </li>
      <li>
        <Link to="/dashboard-normative">Нормативни актове</Link>
      </li>
      <li>
        <Link to="/dashboard-members">Членове</Link>
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
