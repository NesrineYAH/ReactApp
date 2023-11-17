import React from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <h2 className="footer__text-copyright">{t("footer")}
        {/* © CopiyRight 2023- BEKKAR NESRINE.All rights reserved */}
      </h2>
       <h3 className="TitreH3">plan du site ||  Mentions légales </h3> 
   
      <div className="footerContainer">
      </div>
    </footer>
  );
}