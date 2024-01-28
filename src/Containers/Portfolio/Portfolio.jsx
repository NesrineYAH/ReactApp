import React from "react";
import { useTranslation } from "react-i18next";
import MyPortfolio from "../../components/MyPortfolio/MyPortfolio";


const Portfolio = () => {
  const { t } = useTranslation();
  return (
<section id="Portfolio">
    <div id={t("Portfolio_id")} className="portfoloi">
      <h2 className="titlePortfolio"> {t("portfolio_title")}</h2>
      <MyPortfolio />
    </div>
  <div className="CertiPrg">
    <p>{t("TxtCertiPrg.p")} </p>
   <a className="CertiPrg__a"  href={`../Certification/#certifications`}  target="_blank" rel="noopener noreferrer">-- {t("TxtCertiPrg.lien")} --  </a> 
   </div>
 </section>
 
  );
};

export default Portfolio;