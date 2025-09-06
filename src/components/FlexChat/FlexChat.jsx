import { useEffect } from "react";

const FlexChatWidget = () => {
  useEffect(() => {
    if (window.FlexChat) {
      new window.FlexChat({
        REACT_APP_TWILIO_FLOW_SID: "REACT_APP_TWILIO_ACCOUNT_SID",
        themeColor: "#ff6b6b",
        position: "right",
      }).mount();
    }
  }, []);

  return null;
};

export default FlexChatWidget;
