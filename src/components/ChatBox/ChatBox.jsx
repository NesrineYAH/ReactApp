import React, { useState } from "react";
import "./ChatBox.scss";

function ChatBox() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bonjour 👋 Bienvenue sur mon portfolio !" },
    { from: "bot", text: "Clique sur un bouton ci-dessous pour découvrir mon parcours 🚀" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
  };

  // contenu prédéfini pour les boutons
  const handleButtonClick = (section) => {
    let reply = "";
    switch (section) {
      case "profil":
        reply = "👤 Voici mon profil : passionné par le développement et la création de solutions innovantes.";
        break;
      case "formation":
        reply = "🎓 Formation : diplômé en informatique avec une spécialisation en développement web.";
        break;
      case "presentation":
        reply = "🙋‍♂️ Présentation : je suis développeur front-end et back-end avec plusieurs projets à mon actif.";
        break;
      case "competences":
        reply = "🛠️ Compétences : React, Node.js, HTML, CSS, JavaScript, et bien plus encore.";
        break;
      case "services":
        reply = "💼 Autres services : je propose aussi de la formation, du mentoring et du consulting.";
        break;
      case "portfolio":
        reply = "📂 Portfolio : tu peux découvrir mes projets sur la page dédiée.";
        break;
      default:
        reply = "🤔 Je n'ai pas compris.";
    }

    setMessages((prev) => [...prev, { from: "user", text: section }, { from: "bot", text: reply }]);
  };

  return (
    <div className="chatbox">
      <div className="chatbox__header">💬 Chat</div>
      
      <div className="chatbox__messages">
        {messages.map((m, i) => (
          <div key={i} className={`chatbox__message ${m.from}`}>
            {m.text}
          </div>
        ))}
      </div>

      {/* Boutons d'accès rapide */}
      <div className="chatbox__buttons">
        <button onClick={() => handleButtonClick("profil")}>Profil</button>
        <button onClick={() => handleButtonClick("formation")}>Formation</button>
        <button onClick={() => handleButtonClick("presentation")}>Présentation</button>
        <button onClick={() => handleButtonClick("competences")}>Compétences</button>
        <button onClick={() => handleButtonClick("services")}>Autres services</button>
        <button onClick={() => handleButtonClick("portfolio")}>Portfolio</button>
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
  );
}

export default ChatBox;
