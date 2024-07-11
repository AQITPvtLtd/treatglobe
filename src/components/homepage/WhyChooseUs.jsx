"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const WhyChooseUs = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-[230px]">
      <h1 className="font-bold text-5xl mx-10 text-center pt-10 font-serif mb-6">
        {t("choose:header")}
      </h1>
      <div className="lg:grid grid-cols-4 lg:mx-20">
        <div className="relative">
          <Image
            src="/why/arrow1.png"
            width={1000}
            height={1000}
            className="w-[350px] h-[250px]"
            alt="arrow"
          />
          <div className="items-center absolute inset-0 grid grid-rows-6">
            <div className="flex justify-center row-start-3">
              <Image
                src="/why/doctor.png"
                className=""
                height={100}
                width={100}
                alt="arrow"
              />
            </div>
            <h2 className="text-white px-14 row-start-5 text-center text-md font-bold">
              {t("choose:one")}
            </h2>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/why/arrow2.png"
            width={1000}
            height={1000}
            className="w-[350px] h-[250px]"
          />
          <div className="items-center absolute inset-0 grid grid-rows-6">
            <div className="flex justify-center row-start-3">
              <Image
                src="/why/call.png"
                className=""
                height={100}
                width={100}
              />
            </div>
            <h2 className="text-white px-14 row-start-5 text-center text-md font-bold">
              {t("choose:two")}
            </h2>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/why/arrow1.png"
            width={1000}
            height={1000}
            className="w-[350px] h-[250px]"
            alt="arrow"
          />
          <div className="items-center absolute inset-0 grid grid-rows-6">
            <div className="flex justify-center row-start-3">
              <Image
                src="/why/premium.png"
                className=""
                height={100}
                width={100}
                alt="premium"
              />
            </div>
            <h2 className="text-white px-14 row-start-5 text-center text-md font-bold">
              {t("choose:three")}
            </h2>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/why/arrow2.png"
            width={1000}
            height={1000}
            className="w-[350px] h-[250px]"
            alt="arrow"
          />
          <div className="items-center absolute inset-0 grid grid-rows-6">
            <div className="flex justify-center row-start-3">
              <Image
                src="/why/expertise.png"
                className=""
                height={100}
                width={100}
                alt="expertise"
              />
            </div>
            <h2 className="text-white px-3 row-start-5 text-center text-md font-bold">
              {t("choose:four")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
