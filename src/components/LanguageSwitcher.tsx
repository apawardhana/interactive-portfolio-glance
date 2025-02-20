
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage(language === "en" ? "id" : "en")}
        className="text-sm font-medium"
      >
        {language === "en" ? "ID" : "EN"}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
