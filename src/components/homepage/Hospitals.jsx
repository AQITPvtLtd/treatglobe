"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { hospitals } from "@/data/hospitals";
import { useTranslation } from "react-i18next";

const Hospitals = () => {
  const { t } = useTranslation();

  // Custom arrows for slider navigation
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
        <GrNext onClick={onClick} color="black" size={30} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
        <GrPrevious onClick={onClick} color="black" size={30} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  return (
    <div className="lg:mt-10">
      <div className="lg:grid grid-cols-2 h-auto relative">
        {/* Left section with text */}
        <div className="bg-primary">
          <div className="lg:my-24 border-white lg:border-2 ml-5 py-10">
            <h1 className="text-white font-bold text-4xl text-center">
              {t("tophospitals:header")}
            </h1>
            <p className="text-white lg:mx-20 mx-3 leading-loose mt-5">
              {t("tophospitals:content")}
            </p>
          </div>
        </div>

        {/* Right section with hospital images slider */}
        <div className="-ml-3 lg:-ml-16 lg:mt-[140px] mt-5">
          <Slider {...settings} className="overflow-hidden">
            {hospitals.map((hospital) => (
              <div className="lg:mx-10" key={hospital.id}>
                <div className="flex flex-col items-center">
                  <div className="w-[320px] h-[220px] mb-5 overflow-hidden">
                    <Image
                      src={`/hospitals/${hospital.image}`}
                      width={320}
                      height={220}
                      className="w-full h-full object-cover border-4 border-primary"
                      alt={hospital.name}
                    />
                  </div>
                  <h1 className="text-center text-lg font-bold mx-10">
                    {hospital.name}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
