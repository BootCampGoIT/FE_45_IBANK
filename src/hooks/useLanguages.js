import { useState, useEffect } from "react";
import languages from "../languages";

const useLanguages = () => {
  const [language, setLanguage] = useState(languages.russian);
  useEffect(() => {
    const currentLanguage = JSON.parse(localStorage.getItem("language"));
    if (currentLanguage) {
      setLanguage(languages[currentLanguage]);
      return;
    }
    localStorage.setItem("language", JSON.stringify(language.name));
  }, []);

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language.name));
  }, [language]);

  const changeLanguage = (e) => {
    const { value } = e.target;
    setLanguage(languages[value]);
  };
  return [language, changeLanguage, languages.list];
};

export default useLanguages;
