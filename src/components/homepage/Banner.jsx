"use client";

import { useState } from "react";
import "animate.css";
import Image from "next/image";
import ContactForm from "../Contact";
import ScrollTrigger from "react-scroll-trigger";
import { useTranslation } from "react-i18next";

function Banner() {
  const [animate, setAnimate] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="overflow-x-clip">
      <div>
        <div className="relative w-screen">
          {/* Image component for banner */}
          <Image
            width={2000}
            height={2000}
            src="/banner/slider6.png"
            alt="slider-image"
            className="lg:w-full lg:h-[560px] h-[200px] object-cover"
            priority
          />
          <div className="lg:absolute inset-0 lg:grid grid-cols-2 grid-rows-4 lg:mt-10 mt-3">
            {/* Heading with animation */}
            <div className="animate__animated animate__pulse animate__infinite animate__slower text-center items-center font-bold text-4xl flex justify-center bg-gradient-to-t from-primary to-secondary lg:text-transparent bg-clip-text">
              <h1>{t("heading")}</h1>
            </div>
            {/* Scroll-triggered animation */}
            <ScrollTrigger
              onEnter={() => setAnimate(true)}
              onExit={() => setAnimate(false)}
            >
              <div
                className={`${
                  animate ? "animate__animated animate__slideInRight" : ""
                } bg-secondary row-span-4 mt-5 lg:mx-20 rounded-t-2xl bg-opacity-80 col-start-2`}
              >
                <ContactForm />
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
