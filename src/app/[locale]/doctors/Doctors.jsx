"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { doctordata } from "../hospitals/doctordata";
import Autocomplete from "@/components/common/Autocomplete/Autocomplete";
import { hospitals } from "@/components/hospitals";
import { treatment } from "@/components/treatments";
import { useTranslation } from "react-i18next";
const Doctors = () => {
  const { t } = useTranslation();
  const [filteredData, setFilteredData] = useState(doctordata);

  const allClicked = () => {
    setFilteredData(doctordata);
  };
  const topClicked = () => {
    const newData = doctordata.filter((obj) => obj.top);
    setFilteredData(newData);
  };

  //filter doctors
  const handleOnSelectDoctors = (item) => {
    const doctor = doctordata.find((i) => i.id == item.id);
    setFilteredData([doctor]);
  };
  const handleOnClearDoctors = () => {
    setFilteredData(doctordata);
  };
  const getNames = (objects) => {
    return objects.map((obj) => ({ id: obj.id, name: obj.name }));
  };
  const names = getNames(doctordata);

  //filter hospitals
  const handleOnSelectHospitals = (item) => {
    const h = doctordata.filter((i) => i.hid == item.id);
    setFilteredData(h);
  };
  const gethospitals = (objects) => {
    return objects.map((obj) => ({ id: obj.id, name: obj.name }));
  };
  const hosp = gethospitals(hospitals);

  //filter treatments
  const handleOnSelectTreatments = (item) => {
    const h = doctordata.filter((i) => i.hid == item.id);
    setFilteredData(h);
  };
  const getTreatments = (objects) => {
    return objects.map((obj) => ({ id: obj.id, name: obj.name }));
  };
  const treat = getTreatments(treatment);

  return (
    <div className="lg:mt-[170px] mt-[220px] overflow-clip">
      <h1 className="text-center text-5xl mb-10 font-serif font-bold">
        {t("doctors:header")}
      </h1>
      <div className="w-full mb-10">
        <div className="grid grid-cols-8 gap-x-6 mx-3">
          <button
            onClick={allClicked}
            className="rounded-lg p-2 bg-primary text-white"
          >
            {t("doctors:filter1")}
          </button>
          <button
            onClick={topClicked}
            className="rounded-lg p-2 bg-primary text-white"
          >
            {t("doctors:filter2")}
          </button>
          <div className="col-span-2">
            <Autocomplete
              placeholder={t("doctors:filter3")}
              data={names}
              handleOnSelect={handleOnSelectDoctors}
              handleOnClear={handleOnClearDoctors}
            />
          </div>
          <div className="col-span-2">
            <Autocomplete
              placeholder={t("doctors:filter4")}
              data={hosp}
              handleOnSelect={handleOnSelectHospitals}
            />
          </div>
          <div className="col-span-2">
            <Autocomplete
              placeholder={t("doctors:filter5")}
              data={treat}
              handleOnSelect={handleOnSelectTreatments}
            />
          </div>
        </div>
      </div>
      <div className="lg:grid grid-cols-3 gap-10 mx-10">
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
                className="h-[200px] w-[200px]"
              />
              <div className="w-full text-center mx-3">
                <h1 className="mt-5 text-lg font-semibold">{d.name}</h1>
                <p className="text-sm mt-3">{d.post}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
