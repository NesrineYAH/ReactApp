import React, { useState } from 'react';

import { useTranslation } from "react-i18next";
import MyPortfolio from "../../components/MyPortfolio/MyPortfolio";


const Portfolio = () => {
  const { t } = useTranslation();
    const lang = localStorage.getItem("i18nextLang");




export default function ProjectSelector() {
  const [selectedCategory, setSelectedCategory] = useState('DEV');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log("Catégorie sélectionnée :", event.target.value);
    // Ici tu peux aussi déclencher un filtre sur tes projets
  };

  return (
    <label className="Language">
      <select
        className="btg_lang"
        value={selectedCategory}
        onChange={handleChange}
      >
        <option value="DEV">
          Projets Développement Frontend, Full Stack
        </option>
        <option value="DATA">
          Projets DATA
        </option>
      </select>
    </label>
  );
}

 


  return (
<section id="Portfolio">

  <label className='Language'>
            <select className="btg_lang"
          value={selectedCategory}
                  onChange={handleChange}

            >                   <option value="DEV">
                     Projets Développement Frontend, Full Stack
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