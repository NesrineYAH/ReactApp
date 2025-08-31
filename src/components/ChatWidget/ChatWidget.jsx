import React, { useState } from "react";
import ChatBox from "../ChatBox/ChatBox";
import "./ChatWidget.scss";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  // 🚀 Vider toutes les conversations
  const clearConversations = () => {
    setMessages([]);
  };

  return (
    <div className="chat-widget">
      {/* --- Bouton flottant quand le chat est fermé --- */}
      {!isOpen && (
        <button
          className="bpw-widget-btn bpw-floating-button"
          aria-label="Ouvrir la conversation"
          onClick={() => setIsOpen(true)}
        >
          {/* Icône bulle */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.583 14.894l-3.256 3.78c-.7.813-1.26.598-1.25-.46a10689.413 10689.413 0 0 1 .035-4.775V4.816a3.89 3.89 0 0 1 3.88-3.89h12.064a3.885 3.885 0 0 1 3.882 3.89v6.185a3.89 3.89 0 0 1-3.882 3.89H4.583z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        </button>
      )}

      {/* --- Fenêtre de chat --- */}
      {isOpen && (
        <div className="chatbox-container open">
          <div className="chatbox-header">
            <h3 className="chatbox-title">Chat with Nina</h3>

            <div className="chatbox-actions">
              {/* Bouton rafraîchir (vider la conversation) */}
              <button
                className="refresh-button"
                onClick={clearConversations}
                aria-label="Vider la conversation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 4 23 10 17 10" />
                  <polyline points="1 20 1 14 7 14" />
                  <path d="M3.51 9a9 9 0 0114.13-3.36L23 10M1 14l5.36 5.36A9 9 0 0020.49 15" />
                </svg>
              </button>

              {/* Bouton fermer */}
              <button
                className="close-button"
                aria-label="Fermer la conversation"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* ChatBox reçoit messages + setMessages */}
          <ChatBox messages={messages} setMessages={setMessages} />
        </div>
      )}
    </div>
  );
}

export default ChatWidget;
