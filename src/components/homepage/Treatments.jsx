import React from "react";
import Image from "next/image";
import { treatment } from "../treatments";

const Treatments = () => {
  return (
    <div className="mt-20 bg-gradient-to-t from-secondary to-white relative">
      <Image
        src="/services.png"
        width={2000}
        height={1000}
        className="w-full lg:h-[1100px] h-[2100px] object-cover"
        alt="treatmentBanner"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl mx-10 text-center lg:pt-10 font-serif mb-4 text-white">
          Advanced Treatment and Speciality
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-8">
          {treatment.map((t) => (
            <div key={t.id} className="flex flex-col items-center p-5">
              <div className="">
                <div className="lg:h-[200px] w-lg:[200px] w-[150px] h-[150px] bg-primary border-4 border-white rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={`/treatments/${t.image}`}
                    width={500}
                    height={500}
                    alt="treatment"
                    className="object-cover lg:w-[120px] lg:h-[100px] hover:scale-125"
                  />
                </div>
              </div>
              <div className="text-center text-xl font-semibold mt-4 text-white">
                {/* Show treatment names */}
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Treatments;
