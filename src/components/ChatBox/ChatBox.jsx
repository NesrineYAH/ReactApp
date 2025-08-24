import React, { useState } from "react";

function ChatBox() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bonjour 👋 Bienvenue sur mon portfolio ! Comment puis-je vous aider ?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage = { from: "user", text: input };
    setMessages([...messages, userMessage]);

    // Réponse automatique simple
    const botMessage = { from: "bot", text: "Merci pour votre message ! Je reviendrai vers vous rapidement 😊" };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 shadow-lg rounded-2xl bg-white border border-gray-200">
      <div className="p-3 bg-blue-600 text-white font-bold rounded-t-2xl">💬 Chat</div>
      <div className="h-64 p-3 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg text-sm ${
              msg.from === "user"
                ? "bg-blue-100 text-right"
                : "bg-gray-100 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-3 flex">
        <input
          type="text"
          className="flex-1 border rounded-l-lg p-2 text-sm"
          placeholder="Écrire un message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 rounded-r-lg"
        >
          ➤
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
