"use client";

import React from "react";
import { treatment } from "@/data/treatments";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { doctordata } from "@/data/doctordata";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "@/components/Contact";
import { GiCheckMark } from "react-icons/gi";
const SubSpeciality = ({ id }) => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading translations...";
  const tr = treatment.find((d) => d.url === id);
  const done = t(tr.done, { returnObjects: true });
  const detail = t(tr.detail, { returnObjects: true });
  const getDoctorsByTreatmentIdname = (idname) => {
    return doctordata.filter(
      (doctor) =>
        Array.isArray(doctor.treatment) && doctor.treatment.includes(idname)
    );
  };

  const filteredDoctors = getDoctorsByTreatmentIdname(tr.idname);

  return (
    <div className="relative">
      <div className="relative w-full">
        <Image
          src={`/treatments/${tr.image}`}
          alt="Treatment Image"
          className="absolute inset-0 w-full h-full object-cover"
          width={10000}
          height={10000}
        />
        <div className="relative z-10 flex flex-col md:flex-row bg-opacity-60">
          <div className="flex flex-col justify-center p-10 w-full md:w-1/2">
            <h1 className="bg-white bg-opacity-90 p-3 text-primary font-bold text-3xl uppercase text-center">
              {t(tr.name)}
            </h1>
            <p className="bg-white bg-opacity-80 p-5 text-lg">
              <table className="w-full text-sm text-left">
                <tbody>
                  {detail.map((d, index) => (
                    <tr key={index} className=" bg-opacity-60 border-b">
                      <th>
                        <GiCheckMark
                          className="mr-2 text-green-700"
                          size={20}
                        />
                      </th>
                      <td>
                        <div className="mb-2" key={index}>
                          <div className="font-bold">{d}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </p>
          </div>
          <div className="flex flex-col justify-center p-10 w-full md:w-1/2">
            <h1 className="bg-white bg-opacity-90 p-3 text-primary font-bold text-2xl uppercase text-center">
              {t("treatments:heading2")}
            </h1>
            <p className="bg-white bg-opacity-80 p-5 text-lg">
              <table className="w-full text-sm text-left">
                <tbody>
                  {done.map((d, index) => (
                    <tr key={index} className=" bg-opacity-60 border-b">
                      <th>
                        <GiCheckMark
                          className="mr-2 text-green-700"
                          size={20}
                        />
                      </th>
                      <td>
                        <div className="mb-2" key={index}>
                          <div className="font-bold">{d}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="my-10 mx-5">
          <div className="bg-primary rounded-md px-4 py-5 md:px-10 md:py-8">
            <h1 className="text-white text-2xl md:text-3xl font-bold mb-5">
              Doctors for {t(tr.name)}
            </h1>
            {/* doctors */}
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {filteredDoctors.map((d) => (
                <div
                  key={d.id}
                  className="border rounded-md bg-white overflow-hidden flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="relative">
                    <Image
                      src={`/doctors/${d.hid}/${d.image}`}
                      alt={d.name}
                      width={1000}
                      height={1000}
                      className="object-contain w-full h-48 md:h-60"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-4 text-center">
                    <Link href={`/doctors/${d.hid}/${d.id}`}>
                      <h1 className="mt-4 text-lg font-semibold">{d.name}</h1>
                      <p className="text-sm mt-2">{t(d.post)}</p>
                    </Link>

                    <div className="flex justify-center mt-3">
                      <Link
                        href="https://alvo.chat/4C9O"
                        className="bg-[#25d366] rounded-xl px-4 py-2 flex items-center justify-center text-white hover:bg-[#25d366]/90 hover:shadow-md transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="mr-2" size={24} />
                        Whatsapp
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="bg-secondary lg:m-10 rounded-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSpeciality;
