import React from "react";
//import { Routes, Route } from "react-router-dom";
import Profil from "../../components/Profil/Profil";
import About from "../../components/About/About";
import Skills from "../../Containers/Skills/Skills";
import Portfolio from "../../Containers/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";

import { useTranslation } from "react-i18next";


const Home = () => {
    const { t } = useTranslation();
    return (
      <>
        <main className="home">
        
          <About />
          <Profil />        
          <Skills/>
          <Portfolio />
          <Contact/>
        </main>
      </>
    );
  }


export default Home;
