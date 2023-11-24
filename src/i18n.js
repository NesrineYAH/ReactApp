import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationsFR from "./lang/fr.json";
import translationsEN from "./lang/en.json";
import translationsAR from "./lang/ar.json";

const resources = {
  en: {
    translation: translationsEN,
    i18n: "Internationalisation",
    "key": "hello world",
  },
  fr: {
    translation: translationsFR,
    i18n: "Internationalisation",
    "key": "Bonjour tout le monde",
  },
  ar: {
    translation: translationsAR,
    i18n: "Internationalisation",
    "key": "مرحبا بالجميع",
  },
};

const lang = localStorage.getItem("i18nextLng") || "fr"; // Récupère la langue préférée depuis le local storage, ou utilise la langue par défaut "fr" si elle n'est pas définie

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: lang, // Initialise la langue avec la variable "lang"
    fallbackLng: ["fr", "en", "ar"],
    ns: ["translation"],

    keySeparator: ".", // to support nested translations
    debug: true,
    interpolation: {
      espaceValue: false,
      // formatSeparator: ",",
    },
    react: {
      useSuspense: false,
      hashTransKey: function (defaultValue) {
        console.log("missing key", defaultValue);
        return defaultValue;
      },
    },
    function({ t }) {
      // initialized and ready to go!
      i18n.t("key"); // -> ok
      document.getElementById("output").innerHTML = i18n.t("key");
    },
    //["tout le monde !", "Visiteur !", "Recruteur !"]  ["","",""]
  });

export default i18n.t.bind(i18n);
