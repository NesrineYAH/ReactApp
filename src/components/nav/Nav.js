import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav-header">
      <Link to="" className="nav-header__link-home">
        Accueil
      </Link>
      <Link to="/About" className="nav-header__link-about">
        A Propos
      </Link>
      <Link to="/Contact" className="nav-header__link-about">
        Contact
      </Link>
      <Link to="/Competances" className="nav-header__link-about">
        compétence
      </Link>
    </nav>
  );
}
