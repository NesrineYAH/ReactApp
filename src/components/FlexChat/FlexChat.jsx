
import { useEffect } from "react";

const FlexChatWidget = () => {
  useEffect(() => {
    if (window.FlexChat) {
      new window.FlexChat({
        REACT_APP_TWILIO_ACCOUNT_SID:  "process.env.TWILIO_ACCOUNT_SID",
        REACT_APP_TWILIO_FLOW_SID:  "process.env.TWILIO_FLOW_SID",
         title: "💬 Chat avec Nesrine",
        subtitle: "Pose-moi tes questions",
        themeColor: "#ff6b6b",
        position: "right",
      }).mount();
    } else {
      console.error("⚠️ FlexChat n'est pas chargé !");
    }
  }, []);

  return null;
};

export default FlexChatWidget;
