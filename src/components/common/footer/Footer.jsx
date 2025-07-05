"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <footer className=" items-center text-surface">
        <div className="border text-gray-600 mt-5 mx-5"></div>

        <div className="container py-10 pl-10 pt-6 mt-[50px] lg:mt-[14px]">
          <div className="lg:grid grid-cols-4">
            {/* logo */}
            <div>
              <Link href="/" className="">
                <Image
                  src="/logo/logo4.png"
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-[250px] mb-4"
                />
              </Link>
              <p className=" leading-normal">{t("footer:content")}</p>
              {/* Social Icons - Hidden on mobile */}
              <div className="flex gap-4 items-center mt-3">
                <Link
                  title={t("tooltips:facebook")}
                  target="__blank"
                  href={
                    "https://www.facebook.com/profile.php?id=61559397785328"
                  }
                  className="hover:text-secondary text-primary"
                >
                  <FaFacebook size={20} />
                </Link>
                <Link
                  title={t("tooltips:instagram")}
                  target="__blank"
                  href={"https://www.instagram.com/treatglobe/"}
                  className="hover:text-secondary text-primary"
                >
                  <FaInstagram size={20} />
                </Link>
                <Link
                  title={t("tooltips:linkedIn")}
                  target="__blank"
                  href={
                    "https://www.linkedin.com/company/treat-glob/?viewAsMember=true"
                  }
                  className="hover:text-secondary text-primary"
                >
                  <FaLinkedin size={20} />
                </Link>
                <Link
                  title={t("tooltips:youtube")}
                  target="__blank"
                  href={"https://www.youtube.com/@TreatGlobe"}
                  className="hover:text-secondary text-primary"
                >
                  <FaYoutube size={20} />
                </Link>
                <Link
                  title={t("tooltips:telegram")}
                  target="__blank"
                  href={"https://t.me/treatglobe"}
                  className="hover:text-secondary text-primary"
                >
                  <FaTelegramPlane size={20} />
                </Link>
              </div>
            </div>
            <div className="lg:flex justify-center mt-6">
              <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase">
                  {t("footer:heading1")}
                </h5>

                <ul className="mb-0 list-none leading-loose">
                  <li>
                    <Link href="/" className="hover:text-darkgreen">
                      {t("navbar:home")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-darkgreen">
                      {t("navbar:about")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles" className="hover:text-darkgreen">
                      {t("navbar:articles")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-darkgreen">
                      {t("navbar:contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:flex justify-center mt-6">
              <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase">
                  {t("footer:heading2")}
                </h5>

                <ul className="mb-0 list-none leading-loose">
                  <li>
                    <Link
                      href="/treatments/cardiology"
                      className="hover:text-blue"
                    >
                      {t("treatments:one.name")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/treatments/orthopedic-and-joint-replacement"
                      className="hover:text-blue"
                    >
                      {t("treatments:two.name")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/treatments/haemato-oncology-and-bmt"
                      className="hover:text-blue"
                    >
                      {t("treatments:four.name")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/treatments/neurology"
                      className="hover:text-blue"
                    >
                      {t("treatments:three.name")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* address */}
            <div className="lg:flex justify-center mt-6 lg:ml-5">
              <div className="mb-6">
                <ul className="mb-0 list-none leading-loose">
                  <li className="leading-normal">
                    <h5 className="mb-2.5 font-bold uppercase">
                      {t("footer:heading3")}
                    </h5>
                    <div className="flex gap-2">
                      <div>
                        <FaLocationDot className="mt-1 text-lg" />
                      </div>
                      <Link
                        target="__blank"
                        href="https://maps.app.goo.gl/TBuF3NgCjLSVjJZU8"
                        className="hover:text-primary hover:font-bold"
                      >
                        First Floor, Arcadia, C-148, Market, South City II,
                        Sector 49, Gurugram, Fatehpur, Haryana 122018
                      </Link>
                    </div>
                  </li>
                  <li className="mt-3 leading-normal">
                    <Link
                      href="tel:+91 98186 47557"
                      className="hover:text-primary hover:font-bold"
                    >
                      <h5 className="mb-2.5 font-bold uppercase">
                        {t("footer:heading4")}
                      </h5>
                      <div className="flex gap-1">
                        <FaPhoneAlt className="mt-1" />
                        <div className="hover:text-blue">+91 98186 47557</div>
                      </div>
                    </Link>
                  </li>
                  <li className="mt-3 leading-normal">
                    <Link
                      href="mailto:treatglobeinfo@gmail.com"
                      className="hover:text-primary hover:font-bold"
                    >
                      <h5 className="mb-2.5 font-bold uppercase">
                        {t("footer:heading5")}
                      </h5>
                      <div className="flex gap-1">
                        <MdEmail className="mt-1" />
                        <div className="hover:text-blue">
                          treatglobeinfo@gmail.com
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="mailto:info@treatglobe.com "
                      className="hover:text-primary hover:font-bold"
                    >
                      <div className="flex gap-1">
                        <MdEmail className="mt-1" />
                        <div className="hover:text-blue">
                          info@treatglobe.com
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Copyright section --> */}
        <div className="w-full bg-primary text-white p-4 text-center">
          Copyright © 2024 Treatglobe. All rights reserved.
          <div>
            Design & Developed By{' '}
            <Link
              className="text-white font-semibold"
              href="https://www.tekbooster.com"
              target="__blank"
            >
              Tek Booster (Digital Marketing Company)
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
