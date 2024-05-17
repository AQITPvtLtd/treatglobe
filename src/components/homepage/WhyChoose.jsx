import React from 'react';
import { FaHospitalUser } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    icon: <FaHospitalUser />
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet.',
    icon: <TbReportSearch />
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet.',
    icon: <FaHospitalUser />
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet.',
    icon: <FaHospitalUser />
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet.',
    icon: <FaHospitalUser />
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit amet.',
    icon: <FaHospitalUser />
  },
];

const WhyChoose = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl font-semibold text-secondary mb-8">Why Choose Us</h1>
      <div className="grid grid-cols-3 gap-4 mx-10">
        {data.map((d) => (
          <div key={d.id} className="flex flex-col items-center justify-center bg-gray-100 py-6 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div className="text-3xl mb-2">{d.icon}</div>
            <div className="text-center">{d.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
