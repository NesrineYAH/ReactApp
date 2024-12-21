
import React, { useState } from "react";
import Cookies from "js-cookie";
import './CookieBanner.scss'

const CookieBanner = ({ onAccept, onReject }) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleAccept = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365, path: "/" });
    onAccept();  // Appelle la fonction pour cacher le bandeau
    setIsVisible(false)  // Cache le bandeau après acceptation
  };

  const handleReject = () => {
    Cookies.set("cookiesAccepted", "false", { expires: 365, path: "/" });
    onReject();  // Appelle la fonction pour cacher le bandeau
    setIsVisible(false);  // Cache le bandeau après refus
  };
  const handleClose = () => {
    setIsVisible(false);
  }
  if (!isVisible) return null;
  return (

    <div className="cookieBlock">
        <div className="cookieBlock__div">
      <p>
        Nous utilisons des cookies pour améliorer votre expérience. En
        poursuivant votre navigation, vous acceptez notre utilisation des
        cookies.  
      </p>
      <a href="" rel="noopener noreferrer">Politique de Cookies</a>

     </div>
      <div className="cookieBlock__Bouttons">
        <button className="cookieBlock__button" onClick={handleAccept}>Accepter</button>
        <button className="cookieBlock__button" onClick={handleReject}>Refuser</button>
 
      </div>
    </div>
  );
};

export default CookieBanner;
