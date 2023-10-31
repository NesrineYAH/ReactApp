import React from "react";
import { useTranslation } from "react-i18next";
import MyPortfolio from "../../components/MyPortfolio/MyPortfolio";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
<section id="Portfolio">
    <div id={t("Portfolio_id")} className="portfoloi">
      <h1 className="title"> {t("portfolio_title")} </h1>
      <MyPortfolio />
    </div>
 </section>
  );
};

export default Portfolio;