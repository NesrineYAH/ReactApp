import React from "react";
import { useTranslation } from "react-i18next";
import Biographie from "../../Containers/Biographie/Biographie";
import photoImene from "../../assets/images/bakground/imeneYahiaoui.webp";
//import photoImeneMobile from "../../assets/images/imeneikhlef.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Profil = () => {
    const { t } = useTranslation();
    const lang = localStorage.getItem("i18nextLng");
  return (
    <section id="Profil"  data-aos="zoom-in-up"
    style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }}>
    <div className="Profil__container">
     <Biographie />  
    <div className="container_photo" 
     style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }}
    data-aos="zoom-in-up">
        <img src={photoImene} alt={t("photo_alt")} />
   </div>
     </div>
    </section>
  );
};

export default Profil;
