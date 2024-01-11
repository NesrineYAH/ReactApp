import React from "react";
import { useTranslation } from "react-i18next";
import Biographie from "../../Containers/Biographie/Biographie";
import photo from "../../assets/images/bakground/imgIII.png";


const Profil = () => {
    const { t } = useTranslation();
    const lang = localStorage.getItem("i18nextLng");
  return (
    <section id="Profil"  data-aos="zoom-in-up">
    <div className="Profil__container">
     <Biographie />  
    <div className="container_photo">       
        <img src={photo} alt={t("photo_alt")} />
   </div>
     </div>
    </section>
  );
};

export default Profil;
