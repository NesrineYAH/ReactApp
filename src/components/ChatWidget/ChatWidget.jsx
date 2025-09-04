/* import React, { useState, useEffect } from "react";
import ChatBox from "../ChatBox/ChatBox";
import "./ChatWidget.scss";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
const [typingMessage, setTypingMessage] = useState("");

  const clearConversations = () => {
    setMessages([
      { from: "bot", content: "👋 Bienvenue ! Conversation réinitialisée." }
    ]);
  };
  const handleOpen = () => {
  setIsOpen(true);
  setTimeout(() => {
    setMessages([{ from: "bot", content: "👋 Bienvenue ! Choisis une option ou écris-moi un message." }]);
  }, 500); // délai de 0.5s
};
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const fullMessage = "👋 Bienvenue ! Choisis une option ou écris-moi un message.";
      let i = 0;

      const interval = setInterval(() => {
        i++;
        setTypingMessage(fullMessage.slice(0, i));
        if (i === fullMessage.length) {
          clearInterval(interval);
          setMessages([{ from: "bot", content: fullMessage }]);
          setTypingMessage("");
        }
      }, 100); 

      return () => clearInterval(interval);
    }
  }, [isOpen, messages]);

  return (
    <div className="chat-widget">
      {!isOpen && (
             <button
          className="bpw-widget-btn bpw-floating-button"
          aria-label="Ouvrir la conversation"

          onClick={handleOpen}   
        >
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

      {isOpen && (
        <div className="chatbox-container open">
          <div className="chatbox-header">
            <h3 className="chatbox-title">Chat with Nina</h3>
            <button className="close-button" onClick={clearConversations}>
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
            <button className="close-button"  onClick={() => setIsOpen(false)}> 
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

        <ChatBox
  messages={messages}
  setMessages={setMessages}
  typingMessage={typingMessage}
  isTyping={typingMessage.length > 0}
/>

        </div>
      )}
     
    </div>
  );
}
export default ChatWidget;
*/

import React, { Component  } from "react";
import ChatBox from "../ChatBox/ChatBox";
import "./ChatWidget.scss";

class ChatWidget extends Component {


    state = {
    isOpen: false,
    messages: [],
    typingMessage: "",
  };


  handleOpen = () => {
    this.setState({ isOpen: true });
  };

 // Méthode pour fermer le chat et réinitialiser les messages
  clearConversations = () => {
    this.setState({ isOpen: false });   // <-- ferme le chat
    this.setState({ messages: [] });    // <-- vide les messages
    this.setState({ typingMessage: "" }); // optionnel : réinitialise typing
  };

  componentDidMount() {
    // Animation typing seulement si le chat est ouvert
    if (this.state.isOpen && this.state.messages.length === 0) {
      const fullMessage = "👋 Bienvenue ! Choisis une option ou écris-moi un message.";
      let i = 0;

      this.interval = setInterval(() => {
        i++;
        this.setState({ typingMessage: fullMessage.slice(0, i) });
        if (i === fullMessage.length) {
          clearInterval(this.interval);
          this.setState({
            messages: [{ from: "bot", content: fullMessage }],
            typingMessage: "",
          });
        }
      }, 50);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { isOpen, messages, typingMessage } = this.state;
    
  return (
    <div className="chat-widget">
      {!isOpen && (
             <button
          className="bpw-widget-btn bpw-floating-button"
          aria-label="Ouvrir la conversation"

          onClick={handleOpen}   
          
        >
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

      {isOpen && (
        <div className="chatbox-container open">
          <div className="chatbox-header">
            <h3 className="chatbox-title">Chat with Nina</h3>
            <button className="close-button" onClick={clearConversations}>
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
            <button className="close-button"  onClick={() => setIsOpen(false)}> 
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

        <ChatBox
  messages={messages}
  setMessages={setMessages}
  typingMessage={typingMessage}
  isTyping={typingMessage.length > 0}
/>

        </div>
      )}
     
    </div>
  );
}
}
export default ChatWidget;
