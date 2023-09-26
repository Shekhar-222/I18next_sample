import { useTranslation } from "react-i18next";
const Sample = () => {
  const { t } = useTranslation();
  return <h2>{t("this is cps website")}</h2>;
};

export default Sample;
