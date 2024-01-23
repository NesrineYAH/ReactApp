import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaChevronUp } from "react-icons/fa6";

export default function Footer() {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLang");
  return (
    <footer className="footer">
      <h2 className="footer__text-copyright" style={{ direction: lang === "ar" ? "rtl" : "ltr",   fontSize: '18px', alignItems:'center'}}>{t("footer")}</h2>
       <h3 className="TitreH3">{t('plan')} || {t('Mentions')}  </h3>    
      <a className="fa" title="Go to top" href="#home">
      <FaChevronUp id="toTop "/>
      </a>
    </footer>
  );
}