import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./App.scss";
import App from "./App";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>  
  
     <I18nextProvider i18n={i18next}  dir="rtl">          {/*29/12 à 23:15*/}
     <App />
     </I18nextProvider>
  </React.StrictMode>
);

