import React from "react";
import Form from "../../components/Form/Form";
import { Routes, Route } from "react-router-dom";
import Competance from "../../components/Competances/Competances";
import Profil from "../../components/Profil/Profil";
import About from "../../components/About/About";
import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          <About />
          <Profil />

          <Form />
        </div>
      </>
    );
  }
}

export default Home;
