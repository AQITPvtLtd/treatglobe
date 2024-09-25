"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { hospitals } from "@/data/hospitals";
import { CiShare2 } from "react-icons/ci";
import { WhatsappIcon, WhatsappShareButton } from "react-share";
import { MdContentCopy } from "react-icons/md";
import { usePathname } from "next/navigation";
import { FaHandPointRight } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Doctor = ({ doctor, url }) => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading translations...";

  const speciality = t(doctor.speciality, { returnObjects: true });
  const work = t(doctor.work, { returnObjects: true });
  const description = t(doctor.description, { returnObjects: true });
  const training = t(doctor.training, { returnObjects: true });
  const pathname = usePathname();
  const [copied, setCopiedId] = useState();
  useEffect(() => {
    (async function run() {
      if (copied?.includes("text")) {
        // Reading text with readText
        const text = await navigator.clipboard.readText();
      } else if (copied?.includes("image")) {
        // Reading image data with read
        const clipboard = await navigator.clipboard.read();
        const images = await Promise.all(
          clipboard
            .filter((clipboardItem) =>
              clipboardItem.types.includes("image/png")
            )
            .map((clipboardItem) => clipboardItem.getType("image/png"))
        );
      }
    })();
    setTimeout(() => {
      setCopiedId(undefined);
    }, 3000);
  }, [copied]);

  const hospital = hospitals.find((i) => i.id === doctor.hid);

  return (
    <div className=" mt-5 overflow-hidden relative">
      <div className="bg-primary lg:mt-0 mt-4 lg:grid grid-cols-2 lg:mx-5 rounded-lg relative z-10">
        <div className="relative">
          <Image
            src={"/doctors/doctorsgraphics/graphic1.png"}
            width={1000}
            height={1000}
            alt="graphic1"
            className="w-[430px] h-[400px] z-10"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={`/doctors/${doctor.hid}/${doctor.image}`}
              alt="doctor"
              width={1000}
              height={1000}
              className="w-[300px] h-[300px] rounded-full z-20 object-contain bg-white"
            />
          </div>
        </div>
        <div className="bg-white lg:mx-10 mx-3 lg:mt-10 py-4 mb-20 rounded-lg z-20">
          <div className="ml-4 leading-10">
            <div className="font-bold text-3xl mt-3">{doctor.name}</div>
            <div>
              <div className="font-semibold">{t(doctor.post)}</div>
              {/* <div className="mt-3">Works at {hospital.name}</div> */}
              <div className="">{t(doctor.education)}</div>

              <div className="">
                Over{" "}
                <span className="bg-primary text-white font-bold p-2 rounded-full">
                  {doctor.experience}
                </span>{" "}
                years of experience
              </div>
              <div className="grid grid-cols-4 text-white mt-3 mb-3">
                <div className="bg-[#25d366] rounded-xl lg:col-span-1 col-span-2 flex justify-center hover:bg-[#25d366]/90 hover:shadow-md w-full">
                  <Link
                    href="https://alvo.chat/4C9O"
                    className="flex"
                    target="__blank"
                  >
                    <FaWhatsapp className="mt-3 mr-1" />
                    Whatsapp Us
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                Share Doctor Profile <CiShare2 className="mt-1 h-8" />
              </div>
              <div className="border border-gray-300 mr-2"></div>
              <div className="flex justify-around">
                <div className="mt-4">
                  <WhatsappShareButton url={`${url}${pathname}`} round={true}>
                    <div className="flex text-lg">
                      Share on Whatsapp
                      <WhatsappIcon className="w-5 h-5 mt-1 ml-1" />
                    </div>
                  </WhatsappShareButton>
                </div>
                <div className="flex mt-4">
                  <div className="">Copy Link</div>
                  <button
                    className="text-black hover:scale-105 cursor-pointer"
                    onClick={async () => {
                      await navigator.clipboard.writeText(`${url}${pathname}`);
                      setCopiedId("read-text");
                    }}
                  >
                    {copied === "read-text" ? (
                      <div className="flex">
                        <div>✅</div>
                      </div>
                    ) : (
                      <MdContentCopy className="w-5 h-5 ml-1 text-primary" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 rounded-lg shadow -mt-10 bg-white mx-10 p-4 leading-relaxed z-20 relative">
        <div className="lg:grid grid-cols-6">
          <div className="col-span-4">
            <h1 className="text-2xl  mb-2">About {doctor.name}</h1>

            <table className="w-full text-sm text-left">
              <tbody>
                {description.map((d, index) => (
                  <tr key={index} className="bg-white bg-opacity-60 border-b">
                    <th>
                      <FaHandPointRight
                        className="mr-2 text-primary/80"
                        size={20}
                      />
                    </th>
                    <td>
                      <div className="mb-2" key={index}>
                        <div className="text-justify">{d}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-span-2 flex justify-center">
            <div>
              <h1 className="text-2xl text-center">Location</h1>
              <Image
                src={`/hospitals/${hospital.image}`}
                width={1000}
                height={1000}
                className="w-[300px] h-[200px]"
              />
              <div className="flex text-lg mt-2">
                <TiLocation className="mt-1 mr-2" />
                {hospital.name}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* drop down section */}
      <div className="relative lg:w-full lg:mx-10 mx-2 bg-white lg:px-6 lg:pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 rounded-md sm:px-10">
        <div className="px-5">
          <div className="mt-8 grid w-full divide-y divide-neutral-200">
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Work Experience</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  {work.map((w, index) => (
                    <li key={index}>{w}</li>
                  ))}
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Special Interests</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  {speciality.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </p>
              </details>
            </div>

            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span> Training</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  {training.map((t, index) => (
                    <li key={index}>{t}</li>
                  ))}
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
