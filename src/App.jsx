import React, { Component } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Error from "./pages/PageError/PageError";
import Project from "./pages/Project/Project";
import "./App.scss";
import MentionLegales from './pages/MentionsLegales/MentionsLegales'; 
import SiteMap from './pages/SiteMap/SiteMap';
import { SyncLoader   }  from 'react-spinners'; 
import { css } from "@emotion/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading : true}
  }
  
 handleClick = () => {
    window.location.replace("/");
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000); 
      }

 render() {
   const { loading } = this.state; 
   const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1,
  }
  return (  
    <>
    <div className="App" >
    {loading ? (
         <SyncLoader type="TailSpin" className='TailSpin' size={15}  color="#9356DC" 
           animate={{ rotate: 360 }} transition={spinTransition} />   
      ) :(
       <div className="main">
      <BrowserRouter>
       <Header handleClick={this.handleClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Project/:id" element={<Project />} />
          <Route path="/MentionLegales" element={<MentionLegales />} />
          <Route path="/SiteMap" element={<SiteMap />} />
        </Routes>
      </BrowserRouter>  
     <Footer />
      </div>
      )}       
     </div>       
  </>
  );
}
}

export default App;
  