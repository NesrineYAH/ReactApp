import logo from "../../assets/images/logo/logoCode.jpg";
import React from "react";
import barSolid from "../../assets/images/carrousel/bars-solid.svg";

export default function Header(props) {
  return (
    <header className="header">
      <figure className="header__fig">
        <i class="fa-duotone fa-code fa-bounce"></i>

        <img className="header__logo" src={logo} alt="logo développeur web" />
      </figure>
      <nav className="nav-header">
        <div>{props.children}</div>
      </nav>
      <img className="header__bars" src={barSolid} alt=" menu latérale" />
    </header>
  );
}
