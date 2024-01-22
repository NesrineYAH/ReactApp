import React from 'react';
import i18n from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import '../../i18n';


const  Language = () => {
const { t, i18n } = useTranslation();
const lang = localStorage.getItem("i18nextLng");
document.body.dir = i18n.dir();         {/*29/12 à 23:15*/}

    return (
        <div className='Language'>
            <select  style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
                      className="btn_lang"
                      onChange={(e) => i18n.changeLanguage(e.target.value)}
                      value={lang} // Ajouter cet attribut value
                    >
                      <option value="fr">fr</option>
                      <option value="en">en</option>
                      <option value="ar">ar</option>
                    </select>
        </div>
    );
};

export default Language;