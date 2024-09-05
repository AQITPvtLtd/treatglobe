import React from "react";
import Image from "next/image";

const Comprehensive = () => {
  return (
    <div className="mt-10">
      <div className="relative">
        <div className="">
          <Image
            src="/comprehensive/comprehensive.png"
            width={1000}
            height={1000}
            className="w-full h-[1300px] lg:h-[600px] object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>
        <div className="absolute inset-0">
          <h1 className="text-center font-bold text-5xl p-7">
            We Cover All Your Needs
          </h1>
          <div>
            <div className="lg:grid grid-cols-2 gap-y-4 lg:mx-6 mx-2">
              <div className="flex mb-3 lg:mb-0">
                <Image
                  src="/comprehensive/one.png"
                  width={1000}
                  height={1000}
                  className="lg:translate-x-9 w-[150px] h-[130px]"
                />
                <div className="flex items-center">
                  <div className="bg-white font-bold lg:text-xl text-lg shadow-md shadow-primary/70 lg:px-10 py-5 px-2 rounded-tr-3xl">
                    Value added Services for International Patients
                  </div>
                </div>
              </div>
              <div className="flex mb-3 lg:mb-0">
                <Image
                  src="/comprehensive/two.png"
                  width={1000}
                  height={1000}
                  className="lg:translate-x-12 w-[150px] h-[130px]"
                />
                <div className="flex items-center">
                  <div className="bg-white font-bold text-lg shadow-md shadow-primary/70 lg:pl-14 pl-2 pr-2 py-5 rounded-tr-3xl">
                    Visa Facilitation services for patients and their attendants
                  </div>
                </div>
              </div>
              <div className="flex mb-3 lg:mb-0">
                <Image
                  src="/comprehensive/three.png"
                  width={1000}
                  height={1000}
                  className="lg:translate-x-12 w-[150px] h-[130px] lg:mt-0 mt-10"
                />
                <div className="flex items-center">
                  <div className="bg-white font-bold text-lg shadow-md shadow-primary/70 lg:pl-14 pl-2 py-5 rounded-tr-3xl">
                    Complimentary Pick up and Drop - New Delhi International
                    Airport on arrival/ departure to Artemis Hospitals
                  </div>
                </div>
              </div>
              <div className="flex mb-3 lg:mb-0">
                <Image
                  src="/comprehensive/four.png"
                  width={1000}
                  height={1000}
                  className="lg:translate-x-12 w-[150px] h-[130px] mt-5 lg:mt-0"
                />
                <div className="flex items-center">
                  <div className="bg-white font-bold text-lg shadow-md shadow-primary/70 lg:pl-14 pl-2 py-5 rounded-tr-3xl">
                    Case Managers will provide priority facilitation to overseas
                    patients during their stay at the hospital.
                  </div>
                </div>
              </div>
              <div className="flex mb-3 lg:mb-0">
                <Image
                  src="/comprehensive/five.png"
                  width={1000}
                  height={1000}
                  className="lg:translate-x-12 w-[150px] h-[130px]"
                />
                <div className="flex items-center">
                  <div className="bg-white font-bold text-xl shadow-md shadow-primary/70 lg:pl-14 pl-2 py-5 rounded-tr-3xl">
                    The hospitals accept US Dollars and International Master or
                    Visa Credit Cards.
                  </div>
                </div>
              </div>
              <div className="flex mb-3 lg:mb-0">
                <Image
                  src="/comprehensive/six.png"
                  width={1000}
                  height={1000}
                  className="lg:translate-x-14 w-[150px] h-[130px]"
                />
                <div className="flex items-center">
                  <div className="bg-white font-bold text-xl shadow-md shadow-primary/70 lg:pl-16 pl-2 py-5 rounded-tr-3xl">
                    24*7 Translator Services available in major Languages
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
