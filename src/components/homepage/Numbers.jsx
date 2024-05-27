"use client";

import React, { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Numbers = () => {
  const [count, setCount] = useState(false);
  return (
    <div className="mt-[25px] relative">
      <Image
        src="/numbers/numbers_banner.png"
        width={1000}
        height={1000}
        className="h-[500px] w-full object-cover"
        alt="banner"
      />
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <div className="absolute inset-0 grid grid-cols-3 m-[130px] text-white font-bold text-2xl">
          <div className="bg-secondary my-5 rounded-l-lg flex justify-center items-center">
            <div className="my-3">
              <Image src="/numbers/hospitals.png" width={150} height={150} />
              <div className="text-7xl text-center">
                {count && <CountUp start={1} end={10} duration={2} delay={0} />}
                +
              </div>
              <div className="text-center">Hospitals</div>
            </div>
          </div>
          <div className="bg-primary rounded-lg flex justify-center items-center">
            <div>
              <Image src="/numbers/experience.png" width={200} height={200} />
              <div className="text-7xl text-center">
                {count && <CountUp start={1} end={9} duration={2} delay={0} />}+
              </div>
              <div className="text-center">Yrs. Experience</div>
            </div>
          </div>
          <div className="bg-secondary my-5 rounded-r-lg flex justify-center items-center">
            <div>
              <Image src="/numbers/patients.png" width={150} height={150} />
              <div className="text-7xl text-center">
                {count && <CountUp start={1} end={50} duration={2} delay={0} />}
                +
              </div>
              <div className="text-center">Doctors</div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Numbers;
