import React, { useState, useEffect } from "react";
import "./ChatBox.scss";

function ChatBox({ messages = [], setMessages }) {
  const [input, setInput] = useState([
  {
    from: "bot",
    content: "Bonjour et bienvenue dans mon chatbot ! Je l'ai créé afin de vous permettre d'en savoir plus sur moi. N'hésitez pas à me solliciter pour découvrir davantage ! 🤖"
  }
]);
  const [conversationStep, setConversationStep] = useState(null);

  // Si on vide la conversation depuis le parent, on reset aussi l'UI locale
  useEffect(() => {
    if (messages.length === 0) {
      setConversationStep(null);
      setInput("");
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setMessages(prev => [...prev, { from: "user", content: userMessage }]);

    if (conversationStep === "choixCompetences") {
      let reply = "";
      if (userMessage.toLowerCase().includes("web")) {
        reply = "🌐 HTML, CSS, JavaScript, React, Node.js, Express, MongoDB.";
      } else if (userMessage.toLowerCase().includes("data")) {
        reply = "📊 Python, SQL, NoSQL, ETL, Big Data, Cloud (AWS/GCP).";
      } else {
        reply = "🤔 Web ou Data ?";
        setMessages(prev => [...prev, { from: "bot", content: reply }]);
        setInput("");
        return;
      }
      setMessages(prev => [...prev, { from: "bot", content: reply }]);
      setConversationStep(null);
      setInput("");
      return;
    }

    setInput("");
  };

  const handleButtonClick = (section) => {
    let reply;
    
    switch (section) {
      case "profil":
        reply = "👤 Profil : passion pour le dev et les solutions innovantes.";
        break;
      case "formation":
        reply = "🎓 Formation : diplôme info, spécialité web.";
        break;
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
                  { from: "bot", content: "🌐 HTML, CSS, JS, React, Node, Express, MongoDB." }
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
        reply = "💼 Services : formation, mentoring, consulting.";
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
          {messages.length === 0 ? (
            <p className="empty-chat">Commencez la conversation !
 </p>
          ) : (
            messages.map((m, i) => (
              <div key={i} className={`chatbox__message ${m.from}`}>
                {m.content}
              </div>
            ))
          )}
        </div>

        <div className="chatbox__buttons">
          <button onClick={() => handleButtonClick("profil")}>Profil</button>
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
