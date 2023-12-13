import React from "react";
import { Link } from "react-router-dom";
import Profil from "../../components/Profil/Profil";
import About from "../../components/About/About";
import MySkills from "../../components/MySkills/MySkills";
import Portfolio from "../../Containers/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import { useTranslation } from "react-i18next";
import Services from "../../components/Services/Services";
import BlobCloud from "../../components/BlobCloud/BlobCloud";
import TypingAnimation from "../../components/Blog/Blog";
import Certification from "../Certification/Certification";



const Home = () => {
    const { t } = useTranslation();
    return (
      <>
        <main className="home">
          <About />
          <Profil />        
          <MySkills/>
          <Portfolio />
          <p>Apprentissage et suivi des cours en ligne proposés par Openclassrooms, des certifications obtenues à l'issue des cours 
      <Link  to={`../Certification/#certifications`} > Voir certificats </Link>
      </p>
          <Services />
         <TypingAnimation/> 
          <Contact/>
        </main>
      </>
    );
  }


export default Home;
