import React from "react";
import Image from "next/image";
import Link from "next/link";
import { hospitals } from "@/components/hospitals";
const page = () => {
  return (
    <div className="lg:mt-[170px] mt-[220px] overflow-clip">
      <h1 className="text-center text-5xl mb-5 font-serif font-bold">
        Know Our Doctors
      </h1>
      <div className="lg:grid grid-cols-3">
        {hospitals.map((h) => (
          <div className="mt-14" key={h.id}>
            <div className="mb-10 mx-10 container items-center">
              <div className="h-56 w-72 relative hover:scale-105 shadow-md hover:shadow-2xl">
                <div className="group border-primary border absolute w-full h-full rounded-lg drop-shadow-md z-30 flex">
                  <Image
                    src={`/doctors/${h.id}/d1.jpg`}
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-md"
                    alt="Doctor"
                  />
                  {/* <div className="bg-black absolute inset-0 opacity-40"></div> */}
                  <div className="absolute inset-0 flex flex-col justify-end">
                    <div className="text-white text-xl font-serif font-bold bg-primary group-hover:underline">
                      <h1 className="p-2 text-center">{h.name}</h1>
                    </div>
                  </div>
                </div>
                <div className="border-primary skew-y-2 border absolute w-full h-full bg-gray-100 rounded-lg drop-shadow-md z-20 left-3 top-2 ">
                  <Image
                    src={`/doctors/${h.id}/d2.jpg`}
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="border-primary border absolute w-full h-full bg-gray-100 rounded-lg drop-shadow-md z-10 left-6 skew-y-3 top-4">
                  <Image
                    src={`/doctors/${h.id}/d3.jpg`}
                    width={1000}
                    height={1000}
                    className="w-full h-full rounded-md"
                  />
                </div>
              </div>
            </div>
            <Link
              href={`/doctors/${h.id}`}
              className="flex justify-center hover:scale-105  text-white"
            >
              <h1 className="bg-primary hover:bg-primary/90 p-3 text-lg font-semibold rounded-md">
                View All
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
