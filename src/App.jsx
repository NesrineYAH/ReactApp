import React, { Component, Suspense  } from "react";
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
import Cookies from 'js-cookie';
import CookieBanner from './components/CookieBanner/CookieBanner.jsx';  
// import ChatWidget from "./components/ChatWidget/ChatWidget.jsx";
// import CrispChat from "./components/CrispChat/CrispChat.jsx";


const home = React.lazy(() => import("./pages/Home/Home"));
const error = React.lazy(() => import("./pages/PageError/PageError"));
const project = React.lazy(() => import("./pages/Project/Project"));
const mentionLegales = React.lazy(() => import("./pages/MentionsLegales/MentionsLegales"));
const siteMap = React.lazy(() => import("./pages/SiteMap/SiteMap"));


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : true,
       cookiesAccepted: Cookies.get("cookiesAccepted") === "true",
      cookiesRejected: Cookies.get("cookiesAccepted") === "false",
    }

  }
  
 handleClick = () => {
    window.location.replace("/");
  };
  componentDidMount() {
     // Récupérer un cookie si nécessaire (par exemple, un cookie utilisateur)
     const user = Cookies.get('user');  // Exemple de cookie d'utilisateur
     if (user) {
       this.setState({ user });
     }
      // Gérer le délai de chargement
    setTimeout(() => {
      this.setState({ loading: false });
    }, 800); 
  }
    handleCookieAccept = () => {
      this.setState({ cookiesAccepted: true, cookiesRejected: false });
    };
  
    handleCookieReject = () => {
      this.setState({ cookiesAccepted: false, cookiesRejected: true });
    };   
  
 

 render() {
  const { loading, cookiesAccepted, cookiesRejected } = this.state;    const spinTransition = {
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
       <Suspense fallback={<div>Chargement en cours...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/Project/:id" element={<Project />} />
          <Route path="/MentionLegales" element={<MentionLegales />} />
          <Route path="/SiteMap" element={<SiteMap />} />
        </Routes>
        </Suspense>
      </BrowserRouter>  
      

     <Footer />
      </div>
      )}   
 {/* Afficher le bloc de cookies si l'utilisateur n'a pas encore pris de décision */}
 {!cookiesAccepted && !cookiesRejected && <CookieBanner onAccept={this.handleCookieAccept} onReject={this.handleCookieReject} />} 
     </div>       
  </>
  );
}
}

export default App;
  