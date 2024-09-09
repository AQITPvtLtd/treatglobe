import React from "react";
import { treatment } from "@/data/treatments";
import { doctordata } from "@/data/doctordata";
import Link from "next/link";
import Image from "next/image";

const Treatment = ({ id, subid }) => {
  const one = treatment.find((d) => d.id == id);
  const two = one.subspeciality.find((s) => s.id === subid);

  // Function to search for a treatment in the speciality array
  function searchSpeciality(doctors, searchString) {
    return doctors.filter((doctor) =>
      doctor.speciality.some((speciality) =>
        speciality.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }
  const result = searchSpeciality(doctordata, two.name);

  return (
    <div className="mt-[170px] relative">
      <div className="relative w-full">
        <h1 className="bg-white bg-opacity-90 p-3 text-primary font-bold text-5xl uppercase text-center">
          {two.name}
        </h1>
        <div className="relative z-10 flex flex-wrap bg-opacity-60">
          <div className="p-10 w-full md:w-1/2">
            <div className="relative overflow-x-auto w-full">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Treatments
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {two.treatments.map((i, index) => (
                    <tr key={index} className="bg-white bg-opacity-60 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-semibold text-lg whitespace-nowrap text-black"
                      >
                        {i}
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-10 w-full md:w-1/2">
            <div className="relative overflow-x-auto w-full">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-black font-bold">
                      SNo.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Our Doctors
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((i, index) => (
                    <tr
                      key={index}
                      className="bg-white bg-opacity-60 border-b hover:bg-primary/30"
                    >
                      <td className="p-3">
                        <h2>{index + 1}.</h2>
                      </td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-semibold text-lg whitespace-nowrap text-black flex items-center"
                      >
                        <Link href={`/`} className="flex items-center">
                          <Image
                            src={`/doctors/${i.hid}/${i.image}`}
                            width={100}
                            height={100}
                            alt={i.name}
                          />
                          <h1 className="ml-4">{i.name}</h1>
                        </Link>
                      </td>
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

export default Treatment;
