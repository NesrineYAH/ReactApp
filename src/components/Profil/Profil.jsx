import React from "react";
import { useTranslation } from "react-i18next";
import Biographie from "../../Containers/Biographie/Biographie";
//import DownloadBtn from "../../components/Download";
import photoImene from "../../assets/images/bakground/imeneYahiaoui.webp";
//import photoImeneMobile from "../../assets/images/imeneikhlef.webp";

const Profil = () => {
    const { t } = useTranslation();
  return (
    <section id="Profil">
    <div className="Profil__container">
     <Biographie />  
    <div className="container_photo" data-aos="zoom-in-up">
        <img src={photoImene} alt={t("photo_alt")} />
   </div>
     </div>
    </section>
  );
};

export default Profil;
