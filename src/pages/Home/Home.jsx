import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Competance from "../../components/Competances/Competances";
import Profil from "../../components/Profil/Profil";
import About from "../../components/About/About";



class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
           <About />
          <Profil />
          </div>
       

      </>
    );
  }
}

export default Home;
