"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const MissionVision = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="lg:mt-5 mt-[650px] relative">
        <div className="bg-primary pb-20">
          <h1 className=" font-bold text-5xl text-white mx-10 text-center pt-10 font-serif">
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
              <p>
                {/* Our vision is to be the leading medical tourism facilitator,
                known for transforming healthcare journeys through innovation
                and compassion. We aim to bridge the gap between patients and
                world-class medical services, enhancing health and well-being
                while promoting global healthcare excellence. */}
                {t("about:visioncontent")}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 col-start-1 col-span-3 lg:mt-[400px] mt-[1000px] lg:mx-0 mx-[10px] flex justify-center">
          <Image
            src="/missionVision/missionvision.png"
            height={1000}
            width={10000}
            alt="missionvision"
            className="h-[200px] lg:h-[300px] w-[1200px] rounded-xl object-cover hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
