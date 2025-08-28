import React, { useState } from "react";
import "./ChatBox.scss";

function ChatBox() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bonjour 👋 Bienvenue sur mon portfolio !" },
    { from: "bot", text: "Je suis là pour répondre à vos questions et vous guider à travers mes projets. N'hésitez pas à me poser des questions sur mon parcours, mes compétences ou tout autre sujet lié à mon travail. 🚀" }
]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
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

