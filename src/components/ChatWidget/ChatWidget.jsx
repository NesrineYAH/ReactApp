
import React, { Component } from "react";
import ChatBox from "../ChatBox/ChatBox";
import "./ChatWidget.scss";

class ChatWidget extends Component {
  interval = null;

  state = {
    isOpen: false,
    messages: [],
    typingMessage: "",
    isTyping: false,
    buttonsVisible: false,
  };

  setMessages = (updater) => {
    this.setState((prevState) => {
      const nextMessages =
        typeof updater === "function" ? updater(prevState.messages) : updater;
      return { messages: nextMessages };
    });
  };

  startWelcomeTyping = () => {
    const fullMessage =
    "👋 Bonjour et Bienvenue dans mon chatbot ! Je l'ai créé afin de vous permettre d'en savoir plus sur moi. N'hésitez pas à me solliciter pour découvrir davantage ! 🤖";

    if (this.interval) clearInterval(this.interval);

    let i = 0;
    this.interval = setInterval(() => {
      i++;
      this.setState({ typingMessage: fullMessage.slice(0, i) });

      if (i >= fullMessage.length) {
        clearInterval(this.interval);
        this.interval = null;
        this.setState((prev) => ({
          messages: [...prev.messages, { from: "bot", content: fullMessage }],
          typingMessage: "",
        }));
      }
    }, 50);
  };

  handleOpen = () => {
    this.setState(
      { isOpen: true, messages: [], typingMessage: "", buttonsVisible: false },
      this.startWelcomeTyping
    );
  };

  handleClear = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.setState(
      { messages: [], typingMessage: "", buttonsVisible: false },
      this.startWelcomeTyping
    );
  };

  handleClose = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.setState({ isOpen: false, typingMessage: "", buttonsVisible: false });
  };

  handleUserMessage = (msg) => {
    this.setMessages((prev) => [...prev, { from: "user", content: msg }]);

    if (msg.toLowerCase().includes("bonjour")) {
      this.setState({ isTyping: true });

      setTimeout(() => {
        this.setMessages((prev) => [
          ...prev,
          { from: "bot", content: "Super 👍 Choisis une option ci-dessous 👇" },
        ]);
        this.setState({ isTyping: false, buttonsVisible: true });
      }, 1000);
    }
  };

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  render() {
    const { isOpen, messages, typingMessage, isTyping, buttonsVisible } =
      this.state;

    return (
      <div className="chat-widget">
        {!isOpen && (
          <button
            className="bpw-widget-btn bpw-floating-button"
            aria-label="Ouvrir la conversation"
            onClick={this.handleOpen}
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

              {/* Clear: réinitialise la conversation et relance l’animation */}
              <button className="close-button" onClick={this.handleClear}>
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

              {/* Close: ferme la fenêtre */}
              <button className="close-button" onClick={this.handleClose}>
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
              setMessages={this.setMessages}
              typingMessage={typingMessage}
              isTyping={isTyping || typingMessage.length > 0}
              buttonsVisible={buttonsVisible}
              onUserMessage={this.handleUserMessage}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ChatWidget;