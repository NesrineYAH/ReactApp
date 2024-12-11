import React from "react";
import Profil from "../../components/Profil/Profil";
import About from "../../components/About/About";
import MySkills from "../../components/MySkills/MySkills";
import Portfolio from "../../Containers/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import { useTranslation } from "react-i18next";
import Services from "../../components/Services/Services";
import TypingAnimation from "../../components/Blog/Blog";
import { Helmet } from "react-helmet";

const Home = () => {
    const { t } = useTranslation();
    return (
      <>
        <main id="home">
        <Helmet>
        <link rel="canonical" href="https://www.nesrinebekkar.com" />
        </Helmet>
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
