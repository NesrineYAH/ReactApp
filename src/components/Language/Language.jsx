import React from 'react';
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import '../../i18n';


const  Language = () => {
const { t, i18n } = useTranslation();
const lang = localStorage.getItem("i18nextLng");
document.body.dir = i18n.dir();       

    return (
        <div className='Language'>
            <select  style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
                      className="btn_lang"
                      onChange={(e) => i18n.changeLanguage(e.target.value)}
                      value={lang}>
                      <option value="fr">fr</option>
                      <option value="en">en</option>
                      <option value="ar">ar</option>
             </select>
        </div>
    );
};

export default Language;