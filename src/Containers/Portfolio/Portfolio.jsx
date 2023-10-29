import React from "react";
import { useTranslation } from "react-i18next";
import PortfolioGrille from "../../components/PortfolioGrille/PortfolioGrille";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section id="Portfolio">
    <div id={t("portfolio_id")}>
      <h1 className="title"> {t("portfolio_title")} </h1>
      <PortfolioGrille />
    </div>
    </section>
  );
};

export default Portfolio;