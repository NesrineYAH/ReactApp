import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Profil from "../../components/Profil/Profil";
import About from "../../components/About/About";
import Skills from "../../Containers/Skills/Skills";


class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
           <About />
          <Profil />        
          <Skills/>
        </div>

      </>
    );
  }
}

export default Home;
