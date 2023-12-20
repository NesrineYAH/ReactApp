import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaChevronUp } from "react-icons/fa6";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <h2 className="footer__text-copyright">{t("footer")}
        {/* © CopiyRight 2023- BEKKAR NESRINE.All rights reserved */}
      </h2>
       <h3 className="TitreH3">{t('plan')} || {t('Mentions')}  </h3> 
   
      <div className="footerContainer">
      </div>
      <a className="fa" title="Go to top" href="#home">
      <FaChevronUp   id="toTop "/>
      </a>
    </footer>
  );
}