import React, { useState } from "react";
import "./ChatBox.scss";

function ChatBox({ messages = [], setMessages, typingMessage  }) {
  const [input, setInput] = useState("");
  const [conversationStep, setConversationStep] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();

    
    setMessages(prev => [...prev, { from: "user", content: userMessage }]);
    setInput("");

   

      if (conversationStep === "choixCompetences") {
            setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      if (userMessage.toLowerCase().includes("web")) {
        reply = "🌐 HTML, CSS, JavaScript, React, Node.js, Express, MongoDB.";
      } else if (userMessage.toLowerCase().includes("data")) {
        reply = "📊 Python, SQL, NoSQL, ETL, Big Data, Cloud (AWS/GCP).";
      } else {
        reply = "🤔 Web ou Data ?";
      }

      setMessages(prev => [...prev, { from: "bot", content: reply }]);
      setConversationStep(null);
      setInput("");
      setIsTyping(false); // le bot a fini
    }, 1000); // délai de 1s pour simuler la frappe

    return;
  }

  setInput("");
};
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
    Tu veux mes service en : 
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
    <section className="chatbox-section">
      <div className="chatbox">
        <div className="chatbox__messages">
          {messages.map((m, i) => (
            <div key={i} className={`chatbox__message ${m.from}`}>
              {m.content}
            </div>
          ))}

          {isTyping && (
            <div className="chatbox__message bot typing">
              <span className="typing">{typingMessage}
                <span></span><span></span><span></span>
              </span>
              
            </div>
          )}
        </div>

        <div className="chatbox__buttons">
          <button onClick={() => handleButtonClick("Profil")}>Profil</button>
          <button onClick={() => handleButtonClick("formation")}>Formation</button>
          <button onClick={() => handleButtonClick("Expérience")}>Expérience</button>
          <button onClick={() => handleButtonClick("competences")}>Compétences</button>
          <button onClick={() => handleButtonClick("services")}>Autres services</button>
        </div>

        <div className="chatbox__input">
          <input
            type="text"
            placeholder="Écrire un message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>➤</button>
        </div>
      </div>
    </section>
  );
}

export default ChatBox;
