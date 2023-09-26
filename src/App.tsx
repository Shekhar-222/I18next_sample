// App.tsx
import React from "react";
import { I18nextProvider } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import Sample from "./component/Sample";

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <h1>Your App</h1>
        <LanguageSelector />
        <div>
          <h2>{t("greeting")}</h2>
          <Sample />
        </div>
      </div>
    </I18nextProvider>
  );
};

export default App;
