"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="font-bold text-5xl mx-10 text-center pt-10 mb-6">
        {t("choose:header")}
      </h1>

      <div className="lg:grid grid-cols-4 gap-6 lg:space-y-0 space-y-4 lg:mx-20 mx-5">
        {/* First item */}
        <div className="bg-primary rounded-lg p-7 flex flex-col items-center">
          <Image
            src="/why/doctor.png"
            height={100}
            width={100}
            alt="Doctor Icon"
          />
          <h2 className="text-white text-center text-lg font-bold mt-4">
            {t("choose:one")}
          </h2>
        </div>

        {/* Second item */}
        <div className="bg-secondary rounded-lg p-7 flex flex-col items-center">
          <Image src="/why/call.png" height={100} width={100} alt="Call Icon" />
          <h2 className="text-white text-center text-lg font-bold mt-4">
            {t("choose:two")}
          </h2>
        </div>

        {/* Third item */}
        <div className="bg-primary rounded-lg p-7 flex flex-col items-center">
          <Image
            src="/why/premium.png"
            height={100}
            width={100}
            alt="Premium Icon"
          />
          <h2 className="text-white text-center text-lg font-bold mt-4">
            {t("choose:three")}
          </h2>
        </div>

        {/* Fourth item */}
        <div className="bg-secondary rounded-lg p-7 flex flex-col items-center">
          <Image
            src="/why/expertise.png"
            height={100}
            width={100}
            alt="Expertise Icon"
          />
          <h2 className="text-white text-center text-lg font-bold mt-4">
            {t("choose:four")}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
