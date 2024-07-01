import React from "react";
import Image from "next/image";
const Doctor = ({ doctor }) => {
  return (
    <div className="mt-[180px]">
      <section class="py-8 bg-white md:py-16 antialiased">
        <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div class="">
              <Image
                src={`/doctors/${doctor.hid}/${doctor.image}`}
                alt="doctor"
                width={10000}
                height={10000}
                className="w-[300px] h-[300px] mx-auto rounded-full"
              />
            </div>
            <div class="mt-6 sm:mt-8 lg:mt-0">
              <h1 class="text-3xl font-semibold text-gray-900">
                {doctor.name}
              </h1>
              <p className="text-gray-500">-{doctor.post}</p>
              <hr class="my-6 md:my-8 border-gray-200" />

              <p
                class="mb-6 text-gray-500 text-justify"
                dangerouslySetInnerHTML={{ __html: doctor.description }}
              ></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
