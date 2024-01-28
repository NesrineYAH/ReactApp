import React from "react";
//import { Link } from "react-router-dom";
import Profil from "../../components/Profil/Profil";
import About from "../../components/About/About";
import MySkills from "../../components/MySkills/MySkills";
import Portfolio from "../../Containers/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import { useTranslation } from "react-i18next";
import Services from "../../components/Services/Services";
import TypingAnimation from "../../components/Blog/Blog";


const Home = () => {
    const { t } = useTranslation();
    return (
      <>
        <main id="home">
          <About />
          <Profil />        
          <MySkills/>
          <Portfolio />
          <Services />
         <TypingAnimation/> 
          <Contact/>
        </main>
      </>
    );
  }


export default Home;
