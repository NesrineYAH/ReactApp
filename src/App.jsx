import React, { Component } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Error from "./pages/PageError/PageError";
import Project from "./pages/Project/Project";
import "./App.scss";
import Certification from "./pages/Certification/Certification";
import loader from 'react-loader-spinner';
//import { motion } from "framer-motion"

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
  

  return (  
    <>
    <div className="App" >
    {loading ? (
         <loader type="TailSpin"  className='TailSpin' />
      ) :(
       <div className="main">
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
      )}       
    
   
     </div>       
  </>
  );
}
}

export default App;
   {/*          

      const containerStyle ={
      position :'relative',
      width: '3rem',
      height: '3rem'
    }
  const circlestyle ={
  display :'block',
  width: '3rem',
  height:'3rem',
  border: "0.5rem solid #e9e9e9",
  borderTop: "0.5rem solid #3498db", 
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: 0,
  left :0
  }  
  const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1,
 }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  */}