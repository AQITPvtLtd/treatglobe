"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
const Hospitals = () => {
  const { t } = useTranslation();
  const hospitals = [
    {
      id: 1,
      name: "Artemis Hospital",
      image: "artemis.jpeg",
      content: () => {
        t("hospitals:h1");
      },
    },
    {
      id: 2,
      name: "Marengo Asia Hospitals, Gurugram, Haryana,",
      image: "marengo.png",
      content: () => {
        t("hospitals:h2");
      },
    },
    {
      id: 3,
      name: "Fortis Hospital",
      image: "fortis2.jpeg",
      content: () => {
        t("hospitals:h3");
      },
    },
    {
      id: 4,
      name: "Fortis Escorts",
      image: "fortis.png",
      content: () => {
        t("hospitals:h4");
      },
    },
    {
      id: 5,
      name: "Jaypee Hospital",
      image: "jaypee.jpeg",
      content: () => {
        t("hospitals:h5");
      },
    },
    {
      id: 6,
      name: "Max Super Speciality Hospital",
      image: "max.jpeg",
      content: () => {
        t("hospitals:h6");
      },
    },
    {
      id: 7,
      name: "Indraprastha Apollo Hospitals",
      image: "indraprastha.jpeg",
      content: () => {
        t("hospitals:h7");
      },
    },
    {
      id: 8,
      name: "BLK-Max Super Specialty Hospital",
      image: "blk.jpeg",
      content: () => {
        t("hospitals:h8");
      },
    },
    {
      id: 9,
      name: "Medanta Hospital",
      image: "medanto.jpeg",
      content: () => {
        t("hospitals:h9");
      },
    },
    {
      id: 10,
      name: "Manipal Hospital",
      image: "manipal.jpg",
      content: () => {
        t("hospitals:h10");
      },
    },
    {
      id: 11,
      name: "Aakash Hospital",
      image: "aakash.jpg",
      content: () => {
        t("hospitals:h11");
      },
    },
    {
      id: 12,
      name: "CK Birla Hospital",
      image: "birla.jpg",
      content: () => {
        t("hospitals:h12");
      },
    },
  ];

  return (
    <div className="mt-[230px]">
      <h1 className="text-center text-5xl mb-7 font-serif font-bold">
        {t("hospitals:header")}
      </h1>
      <div className="lg:grid grid-cols-3 lg:mx-20">
        {hospitals.map((d) => (
          <Link
            href={`/hospitals/${d.id}`}
            className="hover:scale-105"
            key={d.id}
          >
            <div className="flex justify-center">
              <Image
                src={`/hospitals/${d.image}`}
                width={200}
                height={200}
                className="lg:w-[300px] lg:h-[200px] w-[350px] h-[250px] border-secondary border-4 object-cover"
                alt="hospitals"
              />
            </div>
            <h1 className="font-bold text-xl text-center mb-5 mt-2">
              {d.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;
