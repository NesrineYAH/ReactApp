import React from 'react';
import { useTranslation } from "react-i18next";
import { FaChevronUp } from "react-icons/fa6";


export default function Footer() {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLang");
  return (
    <footer className="footer">
      <h2 className="footer__text-copyright" style={{ direction: lang === "ar" ? "rtl" : "ltr",   fontSize: '18px', alignItems:'center'}}>{t("footer")}</h2>
     <div>
      <ul className='footer__link'>
           <li>{t('plan')}<a href={`../planSite/planSite`} target="_blank" rel="noopener noreferrer" className='TitreH3'></a></li>  
       || <li><a href={`../MentionLegales/#mentionsLegales`} target="_blank" rel="noopener noreferrer" className='TitreH3'>{t('Mentions')}</a></li> 
       </ul>
    </div>
      <a className="fa" title="Go to top" href="#home">
      <FaChevronUp id="toTop "/>
      </a>
    </footer>
  );
}