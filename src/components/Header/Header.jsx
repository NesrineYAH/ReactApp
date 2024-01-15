import react, { Component, useState } from "react";
//import { NavLink } from "react-router-dom";
import React from "react";
import Language from "../Language/Language";
import DarkMode from "../dark/darkMode";
import { FaBars, FaTimes } from "react-icons/fa";
import { withTranslation } from "react-i18next";
import NBY from "../../assets/images/logo/NBY.png";
//import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTransparent: true,
      isMobile: false, //window.matchMedia('(max-width: 768px)').matches,
      showLinks: false,
      showMenu: false,
      matches: window.matchMedia("(min-width: 768px)").matches,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.resizeScreen = this.resizeScreen.bind(this);
  }

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

  resizeScreen() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches; //    const isMobile =window.innerWidth<768;
    this.setState({ isMobile });
  }
  handleScroll() {
    const isTransparent = window.scrollY < 350;
    this.setState({ isTransparent });
  }

  handleLinkClick = (event) => {
    const { hash } = event.currentTarget;
    setTimeout(() => {
      const element = document.querySelector("hash");
      console.log({ hash });
       console.log(element);

      if (element) {
        event.preventDefault();
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
      this.setState({ showLinks: false });
    }, 500);
  };

  render() {
    const { isTransparent, isMobile, showLinks, showMenu } = this.state;
    // const {handleClick} = this.props;
    const { t } = this.props;
    const lang = localStorage.getItem("i18nextLng");

    const handleShowLinks = () => {
      this.setState({ showLinks: !this.state.showLinks });
    };

    const matches = window.matchMedia("(max-width: 768px)").matches; 
    const handleToggleMenu = (e) => {
      e.preventDefault();
      this.setState({ showMenu: !this.state.showMenu });
    };
    const handleToggleMenux = (e) => {
      e.preventDefault();
      this.setState({ showMenu: !this.state.showMenu });
    };

    return (
      <header style={{ flexDirection: lang === "ar" ? "row-reverse" : "row" }} className="header"  id={t("home_path")}>
          
        <nav style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
          className={`navbar_header ${showLinks ? "show_nav" : ""} ${ isTransparent && !isMobile ? "navbar_header--transparent" : ""} `}>

        <button className="navbarLogo" onClick={handleShowLinks}>
          <img className="navbarLogo__img"  src={NBY} alt="logo" style={{ direction: lang === "ar" ? "rtl" : "ltr" }} />
        </button>     

          {!matches ? (
            <div className="nav-screen">
              <ul className="navbar__links">
                <li className="navbar_item slide1">
                  <a href={t("home_path")} className="navbar_link"  onClick={this.handleLinkClick}>
                    {t("home_title")}
                  </a>
                </li>
                <li className="navbar_item slide2">
                  <a href={t("Profil_path")} className="navbar_link" onClick={this.handleLinkClick}>
                    {t("Profil_title")}
                  </a>
                </li>
                <li className="navbar_item slide3">
                  <a href={t("skills_path")} className="navbar_link" onClick={this.handleLinkClick}>
                    {t("skills_title")}
                  </a>
                </li>
                <li className="navbar_item slide4">
                  <a href={t("portfolio_path")} className="navbar_link" onClick={this.handleLinkClick}>
                    {t("portfolio_title")}
                  </a>
                </li>
                <li className="navbar_item slide5">
                  <a href={t("service_path")} className="navbar_link" onClick={this.handleLinkClick}>
                    {t("service_title")}
                  </a>
                </li>
                <li className="navbar_item slide6">
                  <a href={t("contact_path")} className="navbar_link" onClick={this.handleLinkClick}>
                    {t("contact_title")}
                  </a>
                </li>
                <li className="navbar_item slide7">
                  <DarkMode />
                </li>
                <li className="navbar_item slide8">
                  <Language />
                </li>
              </ul>
            </div>
          ) : (
            //show if it's mobil
            <div className="navbar-mobile">
              <div className="navbar-icon">
                {!showMenu ? (
                  <button
                    htmlFor="open"
                    onClick={handleToggleMenu}
                    aria-label="Open menu"
                  >
                    <FaBars />
                  </button>
                ) : (
                  <button
                    htmlFor="close"
                    onClick={handleToggleMenux}
                    aria-label="Close menu"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              <div className={`navbar-menu${showMenu ? " active" : ""}`}>
                <ul className="navbar__links  nav-menu titles">
                <li>
                    <DarkMode />
                  </li>
                  <li>
                    <Language />
                  </li>
                  
                  <li className="navbar_item slide1">
                    <a href={t("home_path")}  className="navbar_link" onClick={this.handleLinkClick}>{t("home_title")}
                    </a>
                  </li>
                  <li className="navbar_item slide2">
                    <a href={t("Profil_path")} className="navbar_link" onClick={this.handleLinkClick}>{t("Profil_title")}
                    </a>
                  </li>
                  <li className="navbar_item slide3">
                    <a
                      href={t("skills_path")}
                      className="navbar_link"
                      onClick={this.handleLinkClick}
                    >
                      {t("skills_title")}{" "}
                    </a>
                  </li>
                  <li className="navbar_item slide4">
                    <a
                      href={t("portfolio_path")}
                      className="navbar_link"
                      onClick={this.handleLinkClick}
                    >
                      {t("portfolio_title")}
                    </a>
                  </li>
                  <li className="navbar_item slide5">
                    <a
                      to={t("service_path")}
                      className="navbar_link"
                      onClick={this.handleLinkClick}
                    >
                      {t("service_title")}
                    </a>
                  </li>
                  <li className="navbar_item slide6">
                    <a
                      href={t("contact_path")}
                      className="navbar_link"
                      onClick={this.handleLinkClick}
                    >
                      {t("contact_title")}
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          )}
        </nav>


      </header>
    );
  }
}

export default withTranslation()(Header);
