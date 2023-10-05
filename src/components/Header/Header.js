import logo from "../../assets/images/logo/logoCode.jpg";
import React from "react";
import barSolid from "../../assets/images/carrousel/bars-solid.svg";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      {/* <figure className="header__fig">
        <i class="fa-duotone fa-code fa-bounce"></i>
       
      </figure> */}
      <nav className="navbar">
        <div classname="MonLogo">
          <img className="header__logo" src={logo} alt="logo développeur web" />
          <img className="header__bars" src={barSolid} alt=" menu latérale" />
        </div>
        <ul className="navbar__links">
          <li className="navbar_item slideInDown1">
            <NavLink to="/#About" className="navbar_link">
              Accueil
            </NavLink>
          </li>
          <li className="navbar_item slideInDown2">
            <NavLink to="/#Profil" className="navbar_link">
              Profil
            </NavLink>
          </li>
          <li className="navbar_item slideInDown3">
            <NavLink to="/#Portfolio" className="navbar_link">
              Portfolio
            </NavLink>
          </li>
          <li className="navbar_item slideInDown4">
            <NavLink to="/#Competances" className="navbar_link">
              Compétences
            </NavLink>
          </li>
          <li className="navbar_item slideInDown5">
            <NavLink to="/#Contact" className="nav-header__link-about">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
