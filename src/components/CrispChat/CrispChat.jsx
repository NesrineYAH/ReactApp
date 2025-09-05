import { useEffect, useState } from "react";
import "./CrispChat.scss"; // Import du fichier SCSS

const CrispChat = () => {
  const [conversationStep, setConversationStep] = useState(null);
  const [messages, setMessages] = useState([]);

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

  const handleButtonClick = (section) => {
    let reply;

    switch (section) {
      case "Profil":
        reply = "👤 Profil : Développeuse web passionnée, curieuse et motivée, j’aime créer des solutions modernes et intuitives. J’accorde beaucoup d’importance à l’expérience utilisateur et à l’innovation dans mes projets.";
        break;
      case "formation":
    reply = "🎓 Formation : Diplômée en informatique avec une spécialisation en développement web. Maintenant je suis enconversion vers le DATA ENGINNER en Alternance.";        break;
      case "Expérience":
        reply = (
          <span>
            🙋‍♂️ Expérience: front/back avec plusieurs projets. CV 👉{" "}
            <a href="https://cv.nesrinebekkar.com" target="_blank" rel="noopener noreferrer">ici</a>.
          </span>
        );
        break;
      case "competences":
        reply = (
          <div>
            🛠️ Tu veux voir mes compétences en :
            <div className="chatbox__buttons">
              <button onClick={() =>
                setMessages(prev => [
                  ...prev,
                  { from: "user", content: "Web" },
                  { from: "bot", content: "🌐 HTML, CSS, SCSS,JS, React, Node, Express, MongoDB. Agluar, Tailwindcss ..etc" }
                ])
              }>Web</button>
              <button onClick={() =>
                setMessages(prev => [
                  ...prev,
                  { from: "user", content: "Data" },
                  { from: "bot", content: "📊 Python, SQL, NoSQL, ETL, Big Data, Cloud." }
                ])
              }>Data</button>
            </div>
          </div>
        );
       setConversationStep("choixCompetences");
        break; 
      case "services":
 reply =(
  <div>
    Tu veux mes services en : 
    <div className="chatbox__buttons">
      <button onClick={() =>
        setMessages(prev => [
          ...prev, 
          { from: "user", content: "Web" },
          { from: "bot", content: "🌐 Création de sites web, applications web, intégration front-end, développement back-end, maintenance et optimisation de sites existants." }
        ])
      }>Web</button>
      <button onClick={() =>
                setMessages(prev => [
                  ...prev,
                  { from: "user", content: "Data" },
                  { from: "bot", content: "📊 Services en Data :\n- Analyse de données et création de tableaux de bord interactifs\n- Nettoyage, transformation et préparation des données\n- Développement de pipelines ETL\n- Machine Learning & IA (classification, prédiction, NLP)\n- Visualisation des données (Power BI, Tableau, D3.js)\n- Conseil en stratégie Data et valorisation des données" }
                ])
              }>Data</button>
  </div>
  </div>
);
 setConversationStep("choixCompetences");
 break;
      default:
        
        reply = "🤔 Je n'ai pas compris.";
    }

    setMessages(prev => [
      ...prev,
      { from: "user", content: section },
      { from: "bot", content: reply },
    ]);
  };

  return (
    <div className="crisp-chat-wrapper">
      {/* Tu peux ajouter un bouton personnalisé si tu veux */}
      <button
        className="crisp-chat-btn"
        onClick={() => {
          window.$crisp.push(["do", "chat:open"]);
        }}
      >
      </button>
      
        <div className="chatbox__buttons">
          <button onClick={() => handleButtonClick("Profil")}>Profil</button>
          <button onClick={() => handleButtonClick("formation")}>Formation</button>
          <button onClick={() => handleButtonClick("Expérience")}>Expérience</button>
          <button onClick={() => handleButtonClick("competences")}>Compétences</button>
          <button onClick={() => handleButtonClick("services")}>Services</button>
        </div>
      
    </div>
  );
};

export default CrispChat;
