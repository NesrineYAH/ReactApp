import React, { Component } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Error from "./pages/PageError/PageError";
//import { useLocation } from "react-router-dom";
import Project from "./pages/Project/Project";
import "./App.scss";
import Certification from "./pages/Certification/Certification";

class App extends React.Component {
 // const location = useLocation();
 handleClick = () => {
    window.location.replace("/");
  };
  render() {
  return (  
    <>
    <div className="App">
      <BrowserRouter>
       <Header handleClick={this.handleClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Project/:id" element={<Project />} />
          <Route path="/Certification" element={<Certification />} />
        </Routes>
      </BrowserRouter>  
         <Footer />
      </div>
  </>

  );
}
}

export default App;
