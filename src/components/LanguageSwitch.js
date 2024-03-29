import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center justify-center space-x-4 ">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-4 py-2 rounded ${
          i18n.language === "en" ? "bg-orange-500 text-white" : "bg-gray-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("vi")}
        className={`px-4 py-2 rounded ${
          i18n.language === "vi" ? "bg-orange-500 text-white" : "bg-gray-200"
        }`}
      >
        VI
      </button>
    </div>
  );
};

export default LanguageSwitch;
