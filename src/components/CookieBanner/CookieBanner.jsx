
import React from "react";
import Cookies from "js-cookie";
import './CookieBanner.scss'

const CookieBanner = ({ onAccept, onReject }) => {
  const handleAccept = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365, path: "/" });
    onAccept();  // Appelle la fonction pour cacher le bandeau
  };

  const handleReject = () => {
    Cookies.set("cookiesAccepted", "false", { expires: 365, path: "/" });
    onReject();  // Appelle la fonction pour cacher le bandeau
  };

  return (
    <div className="cookie-banner">
        <div className="cookie-div">
      <p>
        Nous utilisons des cookies pour améliorer votre expérience. En
        poursuivant votre navigation, vous acceptez notre utilisation des
        cookies.  
      </p>
      <a href="" rel="noopener noreferrer">Politique de Cookies</a>
     </div>
      <div className="cookie-buttons">
        <button className="bouttonCookies" onClick={handleAccept}>Accepter</button>
        <button className="bouttonCookies" onClick={handleReject}>Refuser</button>
 
      </div>
    </div>
  );
};

export default CookieBanner;
