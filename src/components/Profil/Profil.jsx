import React from "react";
import AOS from "aos"; // data-aos="zoom-in-up"
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import photo from "../../assets/images/bakground/imgIII.png";
import SocialMedia from "../../components/socialMedia/socialMedia";



const Profil = () => {
    const { t } = useTranslation();

  return (
    <section id="Profil">
    <div className="Profil__container">
      <div className="Profil"> 
    <h4 className='Profil__titre'>
       {" "}
        {t("main_heading.static_desc")} {t("main_heading.dynamic_desc")}
        </h4> 
       
        <p className='Profil__p'> {t("description_info.main")} </p>
       <SocialMedia />        
      </div>
   
 <div className="container_photo">      
        <img src={photo} alt={t("photo_alt")} />
   </div>

</div>

    </section>
  );
};

export default Profil;
