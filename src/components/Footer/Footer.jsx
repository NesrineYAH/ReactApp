import React from 'react';
import { useTranslation } from "react-i18next";
import { FaChevronUp } from "react-icons/fa6";


export default function Footer() {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLang");
  return (
    <footer className="footer">
      <h2 className="footer__text-copyright" style={{ direction: lang === "ar" ? "rtl" : "ltr",   fontSize: '18px', alignItems:'center'}}>{t("footer")}</h2>

      <ul className='footer__link'>
           <li><a href={`../../SiteMap/#sitemap`} target="_blank" rel="noopener noreferrer" className='TitreH3'>{t('plan')}</a></li>  
       || <li><a href={`../MentionLegales/#mentionsLegales`} target="_blank" rel="noopener noreferrer" className='TitreH3'>{t('Mentions')}</a></li> 
       </ul>
  
      <a className="fa" title="Go to top" href="#home">
      <FaChevronUp id="toTop "/>
      </a>
    </footer>
  );
}