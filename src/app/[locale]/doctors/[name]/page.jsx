"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { doctordata } from "@/data/doctordata";
import { useTranslation } from "react-i18next";
const page = ({ params }) => {
  const { t } = useTranslation();
  const id = params.name;
  const doctors = doctordata.filter((h) => h.hid == id);
  const [inputSearch, setInputSearch] = useState("");

  const handleSearch = (e) => {
    setInputSearch(e.target.value);
  };
  let filteredData = doctors;

  if (inputSearch.trim() !== "") {
    filteredData = doctors.filter((d) =>
      d.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
  }
  return (
    <div className="mt-10">
      {/* search */}
      {/* <div className="w-full mb-10">
        <div className="w-[80%] mx-auto text-black">
          <div className="w-full">
            <div className="flex justify-center items-center">
              <input
                type="text"
                placeholder="search doctors by name..."
                onChange={handleSearch}
                className="w-full text-md font-semibold px-4 py-3 text-black my-4 border-gray-700 bg-gray-100 shadow-lg outline-none"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="lg:grid grid-cols-3 gap-10 mx-10">
        {filteredData.map((d) => (
          <Link
            href={`/doctors/${d.hid}/${d.id}`}
            key={d.id}
            className="border rounded-md hover:scale-105"
          >
            <div className="flex">
              <Image
                src={`/doctors/${id}/${d.image}`}
                width={1000}
                height={1000}
                className="h-[200px] w-[200px]"
              />
              <div className="w-full text-center mx-3">
                <h1 className="mt-5 text-lg font-semibold">{d.name}</h1>
                <p className="text-sm mt-3">{t(d.post)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
