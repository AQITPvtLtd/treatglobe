"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Hospital = ({ id }) => {
  const { t } = useTranslation();
  const hospitals = [
    {
      id: 1,
      name: "Artemis Hospital",
      image: "artemis.jpg",
      content: () => t("hospitals:h1"),
    },
    {
      id: 2,
      name: "Marengo Asia Hospitals, Gurugram, Haryana,",
      image: "marengo.jpg",
      content: () => t("hospitals:h2"),
    },
    {
      id: 3,
      name: "Fortis Hospital",
      image: "fortis2.jpeg",
      content: () => t("hospitals:h3"),
    },
    {
      id: 4,
      name: "Fortis Escorts",
      image: "fortis.png",
      content: () => t("hospitals:h4"),
    },
    {
      id: 5,
      name: "Jaypee Hospital",
      image: "jaypee.jpg",
      content: () => t("hospitals:h5"),
    },
    {
      id: 6,
      name: "Max Super Speciality Hospital",
      image: "max.jpeg",
      content: () => t("hospitals:h6"),
    },
    {
      id: 7,
      name: "Indraprastha Apollo Hospitals",
      image: "indraprastha.jpeg",
      content: () => t("hospitals:h7"),
    },
    {
      id: 8,
      name: "BLK-Max Super Specialty Hospital",
      image: "blk.jpeg",
      content: () => t("hospitals:h8"),
    },
    {
      id: 9,
      name: "Medanta Hospital",
      image: "medanto.jpeg",
      content: () => t("hospitals:h9"),
    },
    {
      id: 10,
      name: "Manipal Hospital",
      image: "manipal.jpg",
      content: () => t("hospitals:h10"),
    },
    {
      id: 11,
      name: "Aakash Hospital",
      image: "aakash.jpg",
      content: () => t("hospitals:h11"),
    },
    {
      id: 12,
      name: "CK Birla Hospital",
      image: "birla.jpg",
      content: () => t("hospitals:h12"),
    },
  ];
  const hosp = hospitals.find((h) => h.id == id);
  console.log(hosp);

  return (
    <div>
      <section class="py-8 bg-white md:py-16 antialiased">
        <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div class="shrink-0 max-w-md lg:max-w-lg mx-auto rounded-xl">
              <Image
                class="w-full"
                src={`/hospitals/${hosp.image}`}
                alt=""
                width={1000}
                height={1000}
                className="w-[500px] h-[400px] "
              />
            </div>
            <div class="mt-6 sm:mt-8 lg:mt-0">
              <h1 class="text-3xl font-semibold text-gray-900">{hosp.name}</h1>
              <hr class="my-6 md:my-8 border-gray-200" />

              <p class="mb-6 text-gray-500">{hosp.content()}</p>
              <div className="flex justify-center">
                <Link
                  href={`/doctors/${hosp.id}`}
                  className="bg-primary text-white p-3 rounded-lg text-center text-lg uppercase hover:bg-primary/90"
                >
                  {t("hospitals:button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hospital;
