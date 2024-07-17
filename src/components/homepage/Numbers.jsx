"use client";

import React, { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useTranslation } from "react-i18next";
const Numbers = () => {
  const [count, setCount] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="lg:mt-[25px] mt-[450px] relative">
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <Image
          src="/numbers/numbers_banner.png"
          width={1000}
          height={1000}
          className="lg:h-[500px] h-[1000px] w-full object-cover"
          alt="banner"
        />

        <div className="absolute inset-0 lg:grid grid-cols-3 m-[20px] lg:m-[130px] text-white font-bold text-2xl">
          <div className="bg-secondary my-5 rounded-l-lg flex justify-center items-center">
            <div className="my-3 ">
              <div className="flex justify-center mb-4">
                <Image
                  src="/numbers/hospital.png"
                  width={200}
                  height={200}
                  alt="numbers"
                  className="rounded-lg "
                />
              </div>
              {/* <div className="text-7xl text-center">
                {count && <CountUp start={1} end={10} duration={2} delay={0} />}
                +
              </div> */}
              <div className="text-center text-4xl">
                {t("numbers:hospitals")}
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-lg flex justify-center items-center">
            <div>
              <Image
                src="/numbers/experiences.png"
                width={200}
                height={200}
                alt="experience"
                className="rounded-lg"
              />
              <div className="text-7xl text-center">
                {count && <CountUp start={1} end={15} duration={2} delay={0} />}
                +
              </div>
              <div className="text-center">{t("numbers:exp")}</div>
            </div>
          </div>
          <div className="bg-secondary my-5 rounded-r-lg flex justify-center items-center">
            <div>
              <div className="flex justify-center mb-4">
                <Image
                  src="/numbers/doctor.png"
                  width={200}
                  height={200}
                  alt="doctors"
                  className="rounded-lg"
                />
              </div>
              {/* <div className="text-7xl text-center">
                {count && <CountUp start={1} end={50} duration={2} delay={0} />}
                +
              </div> */}
              <div className="text-center text-4xl">{t("numbers:doctors")}</div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Numbers;
