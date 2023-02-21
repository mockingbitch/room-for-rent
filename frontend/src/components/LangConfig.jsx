import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "",
  resources: {
    en: {
      translation: {
        Hi: "Hi",
        Actions: "Actions",
        Categories: "Categories"
      },
    },
    tm: {
      translation: {
        Hi: "வணக்கம்",
        Actions: "செயல்கள்",
        Categories: "Categoriestm"
      },
    },
    sp: {
      translation: {
        Hi: "Hola",
        Actions: "Comportamiento",
        Categories: "Categorieshola"
      },
    },
    tl: {
      translation: {
        Hi: "హాయ్",
        Actions: "చర్యలు",
        Categories: "Categoriesholatk"
      },
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
