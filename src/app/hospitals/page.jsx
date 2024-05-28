import React from "react";
import Image from "next/image";
import { hospitals } from "@/components/hospitals";
const page = () => {
  return (
    <div className="mt-[200px]">
      <h1 className="text-center text-5xl mb-7 font-serif font-bold">
        Our Network of Hospitals
      </h1>
      <div className="lg:grid grid-cols-3 lg:mx-20">
        {hospitals.map((d) => (
          <div key={d.id}>
            <div className="flex justify-center">
              <Image
                src={`/hospitals/${d.image}`}
                width={200}
                height={200}
                className="lg:w-[300px] lg:h-[200px] w-[350px] h-[250px] border-secondary border-4"
                alt="hospitals"
              />
            </div>
            <h1 className="font-bold text-xl text-center mb-5 mt-2">
              {d.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
