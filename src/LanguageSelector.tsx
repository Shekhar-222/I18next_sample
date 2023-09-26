// LanguageSelector.tsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "hi", label: "Hindi" },
    { value: "ja", label: "Japanese" }
  ];

  return (
    <div>
      <select
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
