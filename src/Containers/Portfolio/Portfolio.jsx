import React from "react";
import { useTranslation } from "react-i18next";
import MyPortfolio from "../../components/MyPortfolio/MyPortfolio";


const Portfolio = () => {
  const { t } = useTranslation();
    const lang = localStorage.getItem("i18nextLang");

  return (
<section id="Portfolio">

  <label className='Language'>
            <select className="btg_lang">
>                     <option value="DEV">
                     Projets
                         Développement Frontend, Full Stack
                    </option>
                      <option value="Data">
                        Projets DATA</option>
                  
             </select>
        </label>
  
    <div id={t("portfolio_id")} className="portfoloi">
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