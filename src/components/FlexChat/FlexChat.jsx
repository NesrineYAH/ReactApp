// src/components/FlexChatWidget.jsx
import { useEffect } from "react";
import * as FlexWebChat from "@twilio/flex-webchat-ui";

const FlexChatWidget = () => {
  useEffect(() => {
    // Vérifie que les variables d'environnement sont bien définies
    console.log("Account SID:", process.env.REACT_APP_TWILIO_ACCOUNT_SID);
    console.log("Flex Flow SID:", process.env.REACT_APP_TWILIO_FLOW_SID);

    const config = {
      accountSid: process.env.REACT_APP_TWILIO_ACCOUNT_SID, // ⚡ sans guillemets
      flexFlowSid: process.env.REACT_APP_TWILIO_FLOW_SID,   // ⚡ sans guillemets
      title: "💬 Chat avec Nesrine",
      startEngagementOnInit: true, // démarre le chat dès l’ouverture
    };

    FlexWebChat.Manager.create(config)
      .then((manager) => {
        if (!manager) {
          console.error(
            "Manager Twilio est null ❌ Vérifie Account SID / Flex Flow SID"
          );
          return;
        }

        // Personnalisation du thème
        manager.updateConfig({
          colorTheme: {
            overrides: {
              ChatWidget: {
                Container: { background: "#ffffff" },
              },
              MessageBubble: {
                FromOthers: { background: "#f1f1f1", color: "#000000" },
                FromMe: { background: "#007bff", color: "#ffffff" },
              },
            },
          },
        });

        // Rendu du widget dans la div cible
        FlexWebChat.renderWebChat(
          { manager },
          document.getElementById("twilio-chat")
        );
      })
      .catch((err) => {
        console.error("Erreur d'initialisation Twilio WebChat:", err);
      });
  }, []);

  return <div id="twilio-chat" style={{ height: "100vh" }} />;
};

export default FlexChatWidget;
