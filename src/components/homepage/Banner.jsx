"use client";

import { useState } from "react";
import "animate.css";
import Image from "next/image";
import ContactForm from "../Contact";
import ScrollTrigger from "react-scroll-trigger";
function Banner() {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="overflow-x-clip mt-[180px]">
      <div>
        <div className="relative -mt-20 w-screen">
          <Image
            width={2000}
            height={2000}
            src="/banner/slider3.png"
            alt="slider-image"
            className="lg:w-full lg:h-[560px] h-[400px] object-cover"
          />
          <div className="absolute inset-0 lg:grid grid-cols-2 grid-rows-4 lg:mt-20 mt-[300px]">
            <div className="animate__animated animate__pulse animate__infinite animate__slower text-center mt-5 items-center  font-bold text-5xl flex justify-center bg-gradient-to-t from-primary to-secondary lg:text-transparent bg-clip-text">
              <h1>Your Reliable Guide for Treatment Travel</h1>
            </div>
            <ScrollTrigger
              onEnter={() => setAnimate(true)}
              onExit={() => setAnimate(false)}
            >
              <div
                className={` ${
                  animate && "animate__animated animate__slideInRight"
                } bg-secondary row-span-4 mt-5 lg:mx-20 rounded-2xl bg-opacity-80 col-start-2`}
              >
                <ContactForm />
              </div>
            </ScrollTrigger>
          </div>

          {/* {index === currentSlide && (
                <div
                  className={`absolute top-0 left-0 w-full h-full flex items-center ${
                    index === currentSlide
                      ? "animate__animated animate__slideInDown"
                      : ""
                  }`}
                >
                  <h1 className={`lg:w-1/2 grid lg:grid-cols-4 grid-cols-1`}>
                    <div className="lg:col-span-3 col-span-4 lg:col-start-2 mx-4 lg:text-5xl text-2xl font-serif text-white font-bold">
                      {d.name}
                    </div>
                    <div className="text-md mt-5 text-gray-200 lg:col-start-2 lg:col-span-4 mx-4">
                      {d.subheading}
                    </div>
                  </h1>
                </div>
              )} */}

          {/* {index === currentSlide && (
                <div
                  className={`absolute lg:top-48 top-44 left-0 w-full h-full flex items-center lg:ml-[205px] ml-[15px] ${
                    index === currentSlide
                      ? "animate__animated animate__slideInUp"
                      : ""
                  }`}
                >
                  <Link href={"/Broucher/Broucher-1.jpg"}>
                    <button
                      
                      className={`p-3 shadow-2xl bg-primary font-semibold text-white`}
                    >
                      Boucher
                    </button>
                  </Link>

                  <Link href={"/contact"}>
                    <button
                      className={`ml-2 p-3 shadow-2xl bg-primary font-semibold text-white`}
                    >
                      Contact Us
                    </button>
                  </Link>
                </div>
              )} */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
