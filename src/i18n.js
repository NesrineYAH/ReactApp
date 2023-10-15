import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationsFR from "./lang/fr.json";
import translationsEN from "./lang/en.json";
import translationsAR from "./lang/ar.json";

const resources = {
  en: {
    translation: translationsEN,
  },
  fr: {
    translation: translationsFR,
  },
  ar: {
    translation: translationsAR,
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
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
