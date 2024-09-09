"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const MissionVision = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="relative">
        <div className="bg-primary pb-20">
          <h1 className="font-bold text-5xl text-white mx-10 text-center pt-10">
            {t("about:header")}
          </h1>
          <div className="lg:grid grid-cols-2 m-10">
            <div className="text-white border-white border rounded-xl p-8 lg:mr-5 mb-10 shadow-secondary shadow-lg">
              <h1 className="text-center text-2xl font-semibold mb-2">
                {t("about:missiontitle")}
              </h1>
              <p>{t("about:missioncontent")}</p>
            </div>
            <div className="text-white border-white border rounded-xl p-8 lg:ml-5 mb-10 shadow-secondary shadow-lg">
              <h1 className="text-center text-2xl font-semibold mb-2">
                {t("about:visiontitle")}
              </h1>
              <p>{t("about:visioncontent")}</p>
            </div>
          </div>
        </div>
        <div className="lg:-translate-y-16 -translate-y-10 lg:mx-0 mx-[10px] flex justify-center">
          <Image
            src="/missionVision/missionvision.png"
            height={1000}
            width={10000}
            alt="missionvision"
            className="h-[200px] lg:h-[300px] w-[1200px] rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
