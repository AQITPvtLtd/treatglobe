"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { hospitals } from "../hospitals";
import { useTranslation } from "react-i18next";
const Hospitals = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="white" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };
  const { t } = useTranslation();
  return (
    <div className="lg:mt-10">
      <div className="lg:grid grid-cols-2 h-[500px] relative">
        <div className="bg-primary">
          <div className="my-24 border-white lg:border-2 ml-5 py-10">
            <h1 className="text-white font-bold text-4xl font-serif text-center">
              {t("tophospitals:header")}
            </h1>
            <p className="text-white lg:mx-20 mx-3 leading-loose mt-5 ">
              {t("tophospitals:content")}
            </p>
          </div>
        </div>
        <div className="relative -ml-3 lg:-ml-16 lg:mt-[140px]">
          <div className="absolute inset-0">
            <Slider {...settings} className="overflow-x-clip">
              {hospitals.map((h) => (
                <div className=" mx-10" key={h.id}>
                  <div className="">
                    <Image
                      src={`/hospitals/${h.image}`}
                      width={1000}
                      height={1000}
                      className="w-[320px] h-[220px] mb-5 border-secondary border-4"
                      alt="hospitals"
                    />
                    <h1 className="text-center text-lg font-bold mx-10 lg:ml-0 -ml-10">
                      {h.name}
                    </h1>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
