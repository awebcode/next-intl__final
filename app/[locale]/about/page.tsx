import { useTranslations } from "next-intl";
import React from "react";

const x = () => {
  const t = useTranslations();
  return <div className="wrapper py-52">{t("hi")}</div>;
};

export default x;
