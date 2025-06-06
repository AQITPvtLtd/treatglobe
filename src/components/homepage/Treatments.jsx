"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { treatment } from "@/data/treatments";
import Link from "next/link";
const Treatments = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-t from-secondary to-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl mx-10 text-center lg:pt-10 mb-4 ">
          {t("treatments:header")}
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-8">
          {treatment.map((tr) => (
            <Link
              href={`/treatments/${tr.url}`}
              key={tr.id}
              className="flex flex-col items-center p-5"
            >
              <div className="">
                <div className="transform duration-300 hover:scale-105 lg:h-[200px] lg:w-[300px] w-[150px] h-[150px] flex items-center justify-center overflow-hidden">
                  <Image
                    src={`/treatments/${tr.image}`}
                    width={500}
                    height={500}
                    alt="treatment"
                    className="object-fit lg:h-[200px] lg:w-[400px] w-[150px] h-[150px]  rounded-md border-8 border-primary"
                  />
                </div>
              </div>
              <div className="text-center text-xl font-semibold mt-4 text-white">
                {/* Show treatment names */}
                {t(tr.name)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Treatments;
