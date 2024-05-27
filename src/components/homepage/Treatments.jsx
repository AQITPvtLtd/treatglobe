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
        className="w-[2000px] lg:h-[1000px] h-[2000px] object-cover"
        alt="treatmentBanner"
      />
      <div className="absolute inset-0">
        <h1 className=" font-bold text-5xl mx-10 text-center pt-10 font-serif mb-4 text-white">
          Our Best Treatments
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2">
          {treatment.map((t) => (
            <div key={t.id} className="flex justify-center p-5">
              <div>
                <div className="shadow-xl shadow-primary h-[200px] border-white border-4 rounded-full bg-primary flex justify-center p-10">
                  <Image
                    src={`/treatments/${t.image}`}
                    width={500}
                    height={500}
                    alt="treatment"
                    className="lg:w-[120px] h-[80px] lg:h-[100px]"
                  />
                </div>
                <div className="text-center text-xl font-semibold mt-4 text-white">
                  {t.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Treatments;
