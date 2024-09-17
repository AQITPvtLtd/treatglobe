"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { doctordata } from "@/data/doctordata";
import { useTranslation } from "react-i18next";
const TopDoctors = () => {
  const top = doctordata.filter((obj) => obj.top).slice(0, 8);
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-t from-white to-secondary">
      <div className="">
        <h1 className="font-bold text-5xl text-white mx-10 text-center pt-10 mb-6">
          {t("doctors:filter2")}
        </h1>
        <div className="lg:grid grid-cols-4 mx-8 lg:mx-20 gap-6">
          {top.map((d) => (
            <div
              key={d.id}
              className="border lg:mt-0 mt-3 rounded-md bg-white overflow-hidden flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative">
                <Image
                  src={`/doctors/${d.hid}/${d.image}`}
                  alt={d.name}
                  width={1000}
                  height={1000}
                  className="w-full h-48 md:h-60 object-contain"
                />
              </div>
              <div className="flex flex-col flex-grow p-4 text-center">
                <Link href={`/doctors/${d.hid}/${d.id}`}>
                  <h1 className="mt-4 text-lg font-semibold">{d.name}</h1>
                  <p className="text-sm mt-2">{t(d.post)}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link href={"/doctors"} className="text-white flex justify-center mt-6">
          <div className="bg-primary p-3 rounded-lg cursor-pointer mt-10 mb-10">
            {t("doctors:viewall")}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopDoctors;
