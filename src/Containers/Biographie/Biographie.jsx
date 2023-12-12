import React from 'react';
import { useTranslation } from "react-i18next";
import SocialMedia from "../../components/socialMedia/socialMedia";

const Biographie = () => {
    const { t } = useTranslation();
    const lang = localStorage.getItem("i18nextLng");

    return (
    <div className='biographie__container'
     style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
      itemScope
      itemType="http://schema.org/Person"
      >
       <h4 className='Biographie__h4'>
       {" "}
        {t("main_heading.static_desc")} {t("main_heading.dynamic_desc")}
        </h4> 
        <div>
        <p className='Biographie__p'> {t("description_info.main")} </p>
      </div>
      <div>
          <SocialMedia />
        </div>
    </div>
    
    );
};

export default Biographie;