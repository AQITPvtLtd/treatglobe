"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { doctordata } from "@/data/doctordata";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";

const Doctors = () => {
  const { t } = useTranslation();
  const newData = doctordata.filter((obj) => obj.top);
  const [filteredData, setFilteredData] = useState(newData);
  const [clicked, setClicked] = useState("top");

  // Filter all doctors
  const allClicked = () => {
    setFilteredData(doctordata);
    setClicked("all");
  };

  // Filter top doctors
  const topClicked = () => {
    const newData = doctordata.filter((obj) => obj.top);
    setFilteredData(newData);
    setClicked("top");
  };

  return (
    <div className="mt-10 overflow-clip">
      <h1 className="text-center lg:text-5xl text-3xl mb-10 font-bold">
        {t("doctors:header")}
      </h1>
      <div className="flex justify-center mb-10">
        <div className="flex mx-3 gap-x-6">
          <div>
            <button
              onClick={allClicked}
              className={`rounded-lg p-2 bg-primary text-white ${
                clicked == "all" && "border-4 border-secondary"
              } `}
            >
              {t("doctors:filter1")}
            </button>
          </div>
          <div>
            <button
              onClick={topClicked}
              className={`rounded-lg p-2 bg-primary text-white ${
                clicked == "top" && "border-4 border-secondary"
              } `}
            >
              {t("doctors:filter2")}
            </button>
          </div>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="lg:grid grid-cols-3 gap-10 lg:mx-10">
        {filteredData.map((d) => (
          <div
            key={d.id}
            className="border hover:-translate-y-2 transform duration-300 lg:mt-0 mt-5 lg:mx-0 mx-3 rounded-md bg-secondary/10 flex flex-col h-full"
          >
            <div className="flex h-full">
              <Image
                src={`/doctors/${d.hid}/${d.image}`}
                width={1000}
                height={1000}
                className="h-[200px] w-[200px] object-cover"
              />
              <div className="flex flex-col flex-grow justify-between text-center mx-3">
                <Link
                  href={`/doctors/${d.hid}/${d.id}`}
                  className="hover:text-primary"
                >
                  <h1 className="mt-5 text-lg font-semibold">{d.name}</h1>
                  <p className="text-sm mt-3">{t(d.post)}</p>
                </Link>
                <Link
                  target="__blank"
                  href="https://alvo.chat/4C9O"
                  className="text-white mt-3 mb-3"
                >
                  <div className="bg-[#25d366] rounded-xl py-2 flex justify-center hover:bg-[#25d366]/90 hover:shadow-md w-full">
                    <div>
                      <FaWhatsapp className="mt-1 mr-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
