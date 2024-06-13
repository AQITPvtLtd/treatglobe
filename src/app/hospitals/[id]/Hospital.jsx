import React from "react";
import Image from "next/image";
import Link from "next/link";
import { hospitals } from "@/components/hospitals";
const Hospital = ({ id }) => {
  const hosp = hospitals.find((h) => h.id == id);
  return (
    <div>
      <section class="py-8 bg-white md:py-16 antialiased">
        <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div class="shrink-0 max-w-md lg:max-w-lg mx-auto rounded-xl">
              <Image
                class="w-full"
                src={`/hospitals/${hosp.image}`}
                alt=""
                width={1000}
                height={1000}
                className="w-[500px] h-[400px] "
              />
            </div>
            <div class="mt-6 sm:mt-8 lg:mt-0">
              <h1 class="text-3xl font-semibold text-gray-900">{hosp.name}</h1>
              <hr class="my-6 md:my-8 border-gray-200" />

              <p
                class="mb-6 text-gray-500"
                dangerouslySetInnerHTML={{ __html: hosp.content }}
              ></p>
              <div className="flex justify-center">
                <Link
                  href={`/doctors/${hosp.id}`}
                  className="bg-primary text-white p-3 rounded-lg text-center text-lg uppercase hover:bg-primary/90"
                >
                  Click to view associated doctors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hospital;
