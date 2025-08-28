import React, { useState } from "react";
import ChatBox from "../ChatBox/ChatBox"; 
import "./ChatWidget.scss";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-widget">
      {/* Bouton flottant */}
      <button
        className="bpw-widget-btn bpw-floating-button"
        aria-label="Ouvrir ou fermer la conversation"
        onClick={() => setIsOpen(!isOpen)}
      >

        <i>
          {isOpen ? (

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
            
          ) : (
    
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
          )}
        </i>
      </button>

      {/* Fenêtre de chat */}
      <div className={`chatbox-container ${isOpen ? "open" : "closed"}`}>
        <ChatBox />
      </div>
    </div>
  );
}

export default ChatWidget;
