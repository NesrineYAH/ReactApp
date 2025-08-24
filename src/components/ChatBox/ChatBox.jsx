import React, { useState } from "react";

function ChatBox() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bonjour 👋 Bienvenue sur mon portfolio ! Bonjour et bienvenue dans mon chatbot ! Je l'ai créé afin de vous permettre d'en savoir plus sur moi. N'hésitez pas à me solliciter pour découvrir davantage ! Comment puis-je vous aider ?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const botMessage = { from: "bot", text: "Merci pour votre message ! Je reviendrai vers vous rapidement 😊" };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="chatbox">
        <i><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.583 14.894l-3.256 3.78c-.7.813-1.26.598-1.25-.46a10689.413 10689.413 0 0 1 .035-4.775V4.816a3.89 3.89 0 0 1 3.88-3.89h12.064a3.885 3.885 0 0 1 3.882 3.89v6.185a3.89 3.89 0 0 1-3.882 3.89H4.583z" fill="#FFF" fill-rule="evenodd"></path></svg></i>
      <div className="chatbox__header">💬 Chat with Nesrine </div>
      <div className="chatbox__messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbox__message ${msg.from}`}>
            {msg.text}
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
