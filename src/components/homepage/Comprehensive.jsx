import React from "react";
import Image from "next/image";

const Comprehensive = () => {
  return (
    <div className="mt-10">
      <div className="relative">
        {/* Background Image */}
        <div>
          <Image
            src="/comprehensive/comprehensive.png"
            width={1000}
            height={1000}
            className="w-full h-[500px] object-cover lg:block hidden"
            alt="Comprehensive background"
          />
        </div>
        <div className="lg:absolute inset-0 bg-white bg-opacity-40"></div>

        {/* Content */}
        <div className="lg:absolute inset-0">
          <h1 className="text-center font-bold text-5xl p-7">
            We Cover All Your Needs
          </h1>
          <div className="lg:grid grid-cols-2 gap-x-4 gap-y-4 lg:mx-6 mx-4">
            {/* Service Cards */}
            {[
              "Value added Services for International Patients",
              "Visa Facilitation services for patients and their attendants",
              "Complimentary Pick up and Drop",
              "Case Managers will provide priority facilitation to overseas patients during their stay at the hospital.",
              "24*7 Translator Services available in major Languages",
              "The hospitals accept US Dollars and International Master or Visa Credit Cards.",
            ].map((text, index) => (
              <div key={index} className="flex mb-3 lg:mb-0">
                <div className="w-full flex items-center">
                  <div className="bg-white font-bold text-lg lg:text-xl shadow-md shadow-primary/70 px-5 py-5 rounded-tr-3xl w-full">
                    {text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
