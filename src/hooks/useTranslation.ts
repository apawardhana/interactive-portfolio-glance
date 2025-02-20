
import { useLanguage } from "../contexts/LanguageContext";
import en from "../locales/en.json";
import id from "../locales/id.json";

const translations = { en, id };

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: string) => {
    const keys = key.split(".");
    return keys.reduce((obj, key) => obj?.[key], translations[language]) || key;
  };

  return { t };
};
