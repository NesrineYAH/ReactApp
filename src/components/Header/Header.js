import logo from "../../assets/images/logo/logoCode.jpg";
import React from "react";

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
    </header>
  );
}
