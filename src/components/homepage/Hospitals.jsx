import React from "react";
import Image from "next/image";
const Hospitals = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 h-[500px] relative">
        <div className="bg-primary">
          <div className="my-24 border-white border-2 ml-5 py-10">
            <h1 className="text-white font-bold text-4xl font-serif text-center">
              Our Network of Hospitals
            </h1>
            <p className="text-white mx-20 leading-loose mt-5">
              Our network of hospitals spans across multiple regions, bringing
              together a diverse range of world-class healthcare facilities
              under one umbrella. Each hospital in our network is equipped with
              state-of-the-art technology and staffed by experienced,
              compassionate professionals dedicated to providing the highest
              standard of care.
            </p>
          </div>
        </div>
        <div className="relative -ml-20 mt-10">
          <div className="absolute inset-0">
            <div className="grid grid-cols-2 mx-10">
              <div className="">
                <Image
                  src="/hospitals/fortis.png"
                  width={1000}
                  height={1000}
                  className="w-[300px] h-[200px] mb-5 border-secondary border-4"
                />
              </div>
              <Image
                src="/hospitals/fortis.png"
                width={1000}
                height={1000}
                className="w-[300px] h-[200px] border-secondary border-4"
              />
              <Image
                src="/hospitals/fortis.png"
                width={1000}
                height={1000}
                className="w-[300px] h-[200px] border-secondary border-4"
              />
              <Image
                src="/hospitals/fortis.png"
                width={1000}
                height={1000}
                className="w-[300px] h-[200px] border-secondary border-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
