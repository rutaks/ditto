import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import TRANSLATIONS_EN from "./languages/en";
import TRANSLATIONS_FR from "./languages/fr";

export const initializeI18n = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: TRANSLATIONS_EN,
        },
        fr: {
          translation: TRANSLATIONS_FR,
        },
      },
    });
};
