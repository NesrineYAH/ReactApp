import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Profil from "../../components/Profil/Profil";
import About from "../../components/About/About";
import Skills from "../../Containers/Skills/Skills";
import Portfolio from "../../Containers/Portfolio/Portfolio";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
        {/* <Accueil id={t("home_path")} /> */}
           <About />
          <Profil />        
          <Skills/>
          <Portfolio />
        </div>

      </>
    );
  }
}

export default Home;
