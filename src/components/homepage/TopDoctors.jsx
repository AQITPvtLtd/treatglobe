"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { doctordata } from "@/data/doctordata";
import { useTranslation } from "react-i18next";
const TopDoctors = () => {
  const top = doctordata.filter((obj) => obj.top).slice(0, 6);
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-t from-white to-secondary">
      <div className="">
        <h1 className="font-bold text-5xl text-white mx-10 text-center pt-10 mb-6">
          {t("doctors:filter2")}
        </h1>
        <div className="flex flex-wrap justify-center lg:mx-20 gap-6">
          {top.map((t) => (
            <Link
              href={`doctors/${t.hid}/${t.id}`}
              className="relative flex flex-col items-center hover:scale-105 hover:shadow-lg "
              key={t.id}
            >
              <div className="relative shadow-md border border-gray-500 rounded-md mt-5 bg-white px-4 pt-4">
                <Image
                  src={`/doctors/${t.hid}/${t.image}`}
                  width={1000}
                  height={1000}
                  className="w-[200px] h-[200px] object-cover rounded-t-md "
                  alt={t.name}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-sm bg-primary text-center px-2 py-1">
                  <h1 className="text-white font-bold">{t.name}</h1>
                </div>
              </div>
            </Link>
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
