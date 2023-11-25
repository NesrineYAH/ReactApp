import react, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import Language from "../Language/Language";
import DarkMode from "../dark/darkMode";
//import { FaBars, FaTimes } from "react-icons/fa";
import { withTranslation } from 'react-i18next';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTransparent: true,
      isMobile: false,
      showLinks: false,
    };
   // create a handling event ( grestionnaire d'évènement)
    this.handleScroll = this.handleScroll.bind(this);
    this.resizeScreen = this.resizeScreen.bind(this);
  };

  //What I did is adding an event listener after component mount:
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.resizeScreen();
    window.addEventListener("resize", this.resizeScreen);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.resizeScreen);
  }
 // créer une fonction pour redimensionner la taille de l'écran 
  resizeScreen(){
    const isMobile =window.innerWidth<768;
    this.setState({ isMobile });
};
handleScroll() {
  const isTransparent = window.scrollY < 250;
  this.setState({ isTransparent });
}
// Fonction scroll To #section au click (tempo 500ms pr rendu page avant scroll)
handleLinkClick =(event) => {
 const { hash } = event.currentTarget;              // Get the element that triggered the event:
  setTimeout(() => {                                  // excuter this event for 500s
    const element = document.querySelector(hash);
    console.log({ hash });
    console.log(element);

    //Scroll To ID section 
    if (element){ 
      event.preventDefault();
      window.scrollTo({
        top: element.offsetTop,
        behavior:"smooth",
      });
    };
    //fermer menu burger post click
    this.setState({ showLinks: false })
  }, 500);
  };

  render() {
    // Setup menu Header with state 
    const {isTransparent, isMobile, showLinks} =this.state
    // import via propos funtion retour home 
    const {handleClick} = this.props;
    const { t } = this.props;                               // j'ai ajouté 18/11
    //Menu ouverture et fermeture 
   const handleShowLinks =() => {
    this.setState({ showLinks: !this.state.showLinks });
   };
   
   const lang = localStorage.getItem("i18nextLng");
  
    return (
    <header style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }}
     className="header"  id={t("home_path")}>
      
         <nav  style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
         className={`navbar_header ${showLinks ? "show_nav" : ""} ${(isTransparent && !isMobile) ? 'navbar_header--transparent' :
          ''} `}>
          
         <button className="navbar_burger" onClick={handleShowLinks}>
         <span className="burger_bar">Retour</span>
          </button> 
     
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
                      <NavLink to={t("service_path")} className="navbar_link" onClick={this.handleLinkClick}>
                      {t("service_title")}
                      </NavLink>
                    </li>
                    <li className="navbar_item slide6">
                      <NavLink to={t("contact_path")} className="navbar_link" onClick={this.handleLinkClick}>
                      {t("contact_title")}
                      </NavLink>
                    </li>
        </ul>         
        </nav>  
      
        <DarkMode />
        <Language /> 
    </header>
    )
  }

}

  
export default withTranslation()(Header);

