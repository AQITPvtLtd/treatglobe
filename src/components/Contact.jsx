"use client";

import { sendFormData } from "@/services/formData";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "animate.css";
const ContactForm = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const fileData = new FormData();
    fileData.append("myFile", file);
    // Append other form data fields to fileData
    Object.entries(formData).forEach(([key, value]) => {
      fileData.append(key, value);
    });
    const response = await sendFormData(fileData);
    if (response.success) {
      toast.success(response.message, {
        position: "bottom-left",
      });
      router.push("/");
    } else {
      toast.error(response.message, {
        position: "bottom-left",
      });
    }
  };
  return (
    <div className="p-3">
      <h1 className="text-2xl text-white text-center font-semibold mb-2">
        Need Help ?
      </h1>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full mb-3">
              <input
                name="firstName"
                type="text"
                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 pl-3">
            <div className="relative w-full mb-3">
              <input
                name="lastName"
                type="text"
                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="relative w-full mb-3">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 pl-3">
            <div className="relative w-full mb-3">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/* reports */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-md font-bold text-white"
                htmlFor="grid-password"
              >
                Medical Report
              </label>
              <input
                type="file"
                id="myFile"
                name="prescription"
                accept="image/*, .pdf"
                onChange={({ target }) => {
                  if (target.files) {
                    const file = target.files[0];

                    setFile(file);
                  }
                }}
              />
            </div>
          </div>
        </div>
        {/* identity proof */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-md font-bold text-white"
                htmlFor="grid-password"
              >
                Identity Proof
              </label>
              <input
                type="file"
                id="myFile"
                name="prescription"
                accept="image/*, .pdf"
                onChange={({ target }) => {
                  if (target.files) {
                    const file = target.files[0];

                    setFile(file);
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12">
            <div className="relative w-full mb-3">
              <textarea
                type="text"
                className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help ?"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-4">
          <button
            type="submit"
            className=" text-white font-bold bg-primary hover:bg-primary/90 p-2 rounded-xl"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
