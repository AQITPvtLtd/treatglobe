"use client";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Office = () => {
  const { t } = useTranslation();
  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="text-center mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        {t("contact:header2")}
      </h3>
      <div className=" lg:flex justify-center rounded-md p-2 bg-white">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {/* address */}
          <div className="mb-5 mt-2 w-full">
            <div className="flex items-start">
              <div className="flex">
                <FaLocationDot className="text-primary w-[20px] h-[20px]" />
                <div className="ml-3">
                  <p className="mb-2 font-bold dark:text-white">
                    {t("contact:location")}
                  </p>
                  <Link
                    target="__blank"
                    href="https://maps.app.goo.gl/LPTCjhdCZBdtzp8m6"
                    className="text-neutral-500 dark:text-neutral-200"
                  >
                    Office no. 371 Sec 38 Gurgaon
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* phone */}
          <div className="mb-5 mt-2 w-full md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="flex">
                <FaPhoneAlt className="text-primary w-[20px] h-[20px]" />
                <div className="ml-3">
                  <p className="mb-2 font-bold dark:text-white">
                    {t("contact:phone")}
                  </p>
                  <Link
                    href="tel:+91 9818-647-557"
                    className="text-neutral-500 dark:text-neutral-200 hover:text-primary"
                  >
                    +91 9818-647-557
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* email */}
          <div className=" w-full">
            <div className="flex items-start">
              <div className="flex">
                <IoMdMail className="text-primary w-[20px] h-[20px]" />
                <div className="ml-3">
                  <p className="mb-2 font-bold dark:text-white">
                    {t("contact:email")}
                  </p>
                  <Link
                    href="mailto: info@treatglobe.com"
                    className="text-neutral-500 dark:text-neutral-200 hover:text-primary"
                  >
                    info@treatglobe.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
