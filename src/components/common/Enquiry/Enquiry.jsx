"use client";
import { FaWpforms } from "react-icons/fa6";
import Link from "next/link";
import "animate.css";
export default function Enquiry() {
  return (
    <div className="fixed bottom-28 right-8 z-[99]">
      <Link
        href="/contact"
        className="flex animate__animated animate__pulse shadow-primary shadow-lg animate__infinite hover:border-4 hover:p-2 h-14 w-14 cursor-pointer items-center justify-center rounded-md bg-[#4c22eb] text-white transition duration-300 ease-in-out hover:bg-opacity-80"
      >
        <FaWpforms width={100} height={100} className=" w-10 h-10" />
      </Link>
    </div>
  );
}
