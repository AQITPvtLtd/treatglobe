"use client";

import React from "react";
import { treatment } from "@/data/treatments";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const SubSpeciality = ({ id }) => {
  const { t } = useTranslation();
  const tr = treatment.find((d) => d.id == id);
  return (
    <div className="mt-[170px] relative">
      <div className="relative w-full">
        <Image
          src={`/treatments/${tr.image}`}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
          alt="Treatment Image"
        />
        <div className="relative z-10 flex bg-opacity-60">
          <div className="flex flex-col justify-center p-10 w-1/2">
            <h1 className="bg-white bg-opacity-90 p-3 text-primary font-bold text-5xl uppercase text-center">
              {t(tr.name)}
            </h1>
            <p className="bg-white bg-opacity-60 p-5  text-lg">{tr.content}</p>
          </div>
          <div className="flex items-center justify-center relative z-10 p-10 w-1/2">
            <div className="relative overflow-x-auto w-full">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Services
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tr.subspeciality.map((i, index) => (
                    <tr key={index} className="bg-white bg-opacity-60 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-semibold text-lg whitespace-nowrap text-black"
                      >
                        <Link
                          href={`${id}/${i.id}`}
                          className="hover:underline"
                        >
                          {i.name}
                        </Link>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSpeciality;
