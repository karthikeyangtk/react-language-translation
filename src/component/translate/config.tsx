import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { english } from "../../language/en";
import { french } from "../../language/fr";
import { tamil } from "../../language/tn";
import {
  languageConstants,
  languageTypes,
} from "../../language/languageConstants";

type Language = keyof typeof languageConstants;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: english,
    },
    fr: {
      translation: french,
    },
    tn: {
      translation: tamil,
    },
  },
  lng: languageTypes.en,
  fallbackLng: languageTypes.en,
  interpolation: {
    escapeValue: false,
  },
});

export const useLanguageTranslation = () => {
  const { t } = useTranslation();

  /**
   * Translate based on the given param
   */
  function translate(name: Language) {
    return t(name);
  }
  return { translate };
};
