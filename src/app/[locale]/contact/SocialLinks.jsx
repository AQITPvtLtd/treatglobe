"use client";

import {
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const SocialLinks = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="text-center mb-4 text-2xl font-bold leading-tight text-black dark:text-black">
        {t("contact:header")}
      </h3>
      <p>{t("contact:content")}</p>
      <div className="container max-w-screen-lg mx-auto mt-4">
        <div>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              href="https://www.facebook.com/people/Treat-globe/61559397785328/"
              target="__blank"
              title={t("tooltips:facebook")}
              className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/treatglobe/"
              target="__blank"
              title={t("tooltips:instagram")}
              className="bg-pink-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/company/treat-glob/?viewAsMember=true"
              target="__blank"
              title={t("tooltips:linkedIn")}
              className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.youtube.com/@TreatGlobe"
              target="__blank"
              title={t("tooltips:youtube")}
              className="bg-red-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            >
              <FaYoutube />
            </Link>
            <Link
              href="https://t.me/treatglobe"
              target="__blank"
              title={t("tooltips:telegram")}
              className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
            >
              <FaTelegramPlane />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
