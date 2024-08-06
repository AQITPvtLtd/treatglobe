"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { hospitals } from "@/data/hospitals";
const Hospitals = () => {
  const { t } = useTranslation();
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
