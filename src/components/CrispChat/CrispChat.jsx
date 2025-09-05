import { useEffect } from "react";
import "./CrispChat.scss"; // Import du fichier SCSS

const CrispChat = () => {
  useEffect(() => {
    // Vérifie si le script n'existe pas déjà
    if (!document.getElementById("crisp-script")) {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "f34b81bb-4c37-41bb-b5ed-82f774d1fb33";

      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.id = "crisp-script";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    }
  }, []);

  return (
    <div className="crisp-chat-wrapper">
      {/* Tu peux ajouter un bouton personnalisé si tu veux */}
      <button
        className="crisp-chat-btn"
        onClick={() => {
          window.$crisp.push(["do", "chat:open"]);
        }}
      >
        Chat avec nous
      </button>
      
    </div>
  );
};

export default CrispChat;
