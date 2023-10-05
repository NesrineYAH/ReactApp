import React from "react";
//import iconeLinkedin from "../../assets/images/banner/linkedin.svg";
//import iconeGithub from "../../assets/images/banner/github.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text-copyright">
        © CopiyRight 2023- BEKKAR NESRINE.All rights reserved
        <br />
        plan du site | Mentions légales | Politique de confidentialité
      </p>
      <div className="footerContainer">
        {/* <link to="www.linkedin.com/in/nesrine-yahoum-16ba4590" /> */}
        {/* <img
          className="footerContainer__icone"
          src={iconeLinkedin}
          alt="icone linkedin"
        /> */}

        {/* <img
          className="footerContainer__icone"
          src={iconeGithub}
          alt="icone github"
        /> */}
      </div>
    </footer>
  );
}
