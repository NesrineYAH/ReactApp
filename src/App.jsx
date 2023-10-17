import React, { Component } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Error from "./pages/PageError/PageError";
import Competance from "./components/Competances/Competances";
import { useLocation } from "react-router-dom";

import "./App.scss";

class App extends React.Component {
 // const location = useLocation();
 handleClick = () => {
    window.location.replace("/");
  };
  render() {
  return (

    <>
      <BrowserRouter>
        <Header handleClick={this.handleClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Competances" element={<Competance />} />
        </Routes>
        <Footer />
      </BrowserRouter>  
      </>


  );
}
}

export default App;
