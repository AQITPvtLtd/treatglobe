"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { doctordata } from "@/data/doctordata";
import Autocomplete from "@/components/common/Autocomplete/Autocomplete";
import { hospitals } from "@/data/hospitals";
import { treatment } from "@/data/treatments";
import { useTranslation } from "react-i18next";
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

  // Filter by doctor name
  const handleOnSelectDoctors = (item) => {
    const doctor = doctordata.find((i) => i.id == item.id);
    setFilteredData([doctor]);
    setClicked("");
  };

  const handleOnClearDoctors = () => {
    setFilteredData(doctordata);
  };

  const getNames = (objects) => {
    return objects.map((obj) => ({ id: obj.id, name: obj.name }));
  };

  const names = getNames(doctordata);

  // Filter by hospital
  const handleOnSelectHospitals = (item) => {
    const h = doctordata.filter((i) => i.hid == item.id);
    setFilteredData(h);
    setClicked("");
  };

  const gethospitals = (objects) => {
    return objects.map((obj) => ({ id: obj.id, name: obj.name }));
  };

  const hosp = gethospitals(hospitals);

  return (
    <div className="mt-10 overflow-clip">
      <h1 className="text-center lg:text-5xl text-3xl mb-10  font-bold">
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

      {/* Conditional Heading for Search Results */}
      {/* {filteredData.length > 0 && (
        <h2 className="text-center text-4xl mb-10 font-semibold">
          {t("Doctors")}
        </h2>
      )} */}

      {/* Doctor Cards */}
      <div className="lg:grid grid-cols-3 gap-10 lg:mx-10">
        {filteredData.map((d) => (
          <Link
            href={`/doctors/${d.hid}/${d.id}`}
            key={d.id}
            className="border rounded-md hover:scale-105 bg-secondary/10"
          >
            <div className="flex">
              <Image
                src={`/doctors/${d.hid}/${d.image}`}
                width={1000}
                height={1000}
                className="h-[200px] w-[200px] object-cover"
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

export default Doctors;
