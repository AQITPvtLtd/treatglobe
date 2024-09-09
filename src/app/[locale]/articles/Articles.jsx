"use client";

import React from "react";
import { useTranslation } from "react-i18next";
const Articles = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-5">
      <h1 className="text-center text-5xl mb-7 font-bold">
        {t("articles:header")}
      </h1>
      {t("articles:comingsoon")}
    </div>
  );
};

export default Articles;
