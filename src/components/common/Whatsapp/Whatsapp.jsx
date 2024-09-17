"use client";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import "animate.css";
export default function Whatsapp() {
  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      <Link
        href="https://alvo.chat/4C9O"
        target="__blank"
        className="flex animate__animated animate__pulse hover:border-4 hover:p-2 shadow-primary shadow-lg animate__infinite h-14 w-14 cursor-pointer items-center justify-center rounded-md bg-[#25d366] text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
      >
        <FaWhatsapp width={100} height={100} className=" w-10 h-10" />
      </Link>
    </div>
  );
}
