"use client";
import Link from "next/link";
import Image from "next/image";
import "animate.css";
import { useTranslation } from "react-i18next";
export default function Enquiry() {
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-28 right-8 z-[99]">
      <Link
        title={t("tooltips:enquire")}
        href="/contact"
        className="flex animate__animated animate__pulse shadow-primary shadow-lg animate__infinite hover:border-4 hover:p-2 h-14 w-14 cursor-pointer items-center justify-center rounded-md bg-[#4c22eb] text-white transition duration-300 ease-in-out hover:bg-opacity-80"
      >
        <Image src="/formimage.png" width={100} height={100} className="p-2" />
      </Link>
    </div>
  );
}
