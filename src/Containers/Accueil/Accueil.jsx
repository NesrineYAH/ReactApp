import React from 'react';
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

 const Accueil = (props) => {
     const { t, i18n } = useTranslation();
    const lang = localStorage.getItem("i18nextLng");

     return (
      <div id={t("home_id")}>
        <div   style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }}  >
     
                  <ul className="navbar__links">
                    <li className="navbar_item slide1">
                      <NavLink to={t("home_path")} className="navbar_link" onClick={this.handleLinkClick}>
                      {t("home_title")}
                      </NavLink>
                    </li>
                    <li className="navbar_item slide2">
                      <NavLink to={t("Profil_path")}className="navbar_link" onClick={this.handleLinkClick}>
                      {t("Profil_title")}
                      </NavLink>
                    </li>
              
                    <li className="navbar_item slide3">
                      <NavLink to={t("skills_path")} className="navbar_link" onClick={this.handleLinkClick}>
                      {t("skills_title")}
                      </NavLink>
                    </li>
                    <li className="navbar_item slide4">
                      <NavLink to={t("portfolio_path")} className="navbar_link" onClick={this.handleLinkClick}>
                      {t("portfolio_title")}
                      </NavLink>
                    </li>
                    <li className="navbar_item slide5">
                      <NavLink to={t("contact_path")} className="navbar_link" onClick={this.handleLinkClick}>
                      {t("contact_title")}
                      </NavLink>
                    </li>
                  </ul>       
                            
        </div> 
      </div>  
   );
     };
 export default Accueil;