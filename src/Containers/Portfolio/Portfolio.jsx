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
   </div>
 </section>
 
  );
};

export default Portfolio;