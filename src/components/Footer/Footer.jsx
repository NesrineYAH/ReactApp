import React from "react";
//import iconeLinkedin from "../../assets/images/banner/linkedin.svg";
//import iconeGithub from "../../assets/images/banner/github.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <h2 className="footer__text-copyright">{t("footer")}
        © CopiyRight 2023- BEKKAR NESRINE.All rights reserved
    </h2>
        <p>plan du site | Mentions légales | Politique de confidentialité</p>
     
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