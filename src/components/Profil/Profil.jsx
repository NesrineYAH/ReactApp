import React from "react";
import AOS from "aos"; // data-aos="zoom-in-up"
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import Biographie from "../../Containers/Biographie/Biographie";
import photo from "../../assets/images/bakground/imgIII.png";


const Profil = () => {
    const { t } = useTranslation();

  return (
    <section id="Profil">
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
