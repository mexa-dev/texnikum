import { useTranslation } from "react-i18next";

export const useLang = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return { t, changeLang, i18n };
};
