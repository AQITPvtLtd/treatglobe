"use client";

import { sendFormData } from "@/services/formData";
import { uploadFiles } from "@/services/uploadfiles";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "animate.css";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [identityFile, setIndentityFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, type) => {
    if (type === "file") {
      setFile(e.target.files[0]);
    } else {
      setIndentityFile(e.target.files[0]);
    }
  };

  const sendFormData = async (fileData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: fileData,
      });
      return await response.json(); // Return response as JSON
    } catch (error) {
      console.error("Error during form submission", error);
      return {
        success: false,
        message: "An error occurred. Please try again.",
      };
    }
  };

  const uploadFiles = async (fileData) => {
    // You can add logic here for any additional file uploads if needed
    // For now, we assume the files are uploaded with the form submission
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileData = new FormData();

    // Skip file and identity validation, make them optional
    if (file) {
      if (file.size > 500 * 1024) {
        // Check if file size exceeds 500KB
        alert("File size must not exceed 500KB!");
        return;
      }
      fileData.append("myFile", file);
    }

    if (identityFile) {
      if (identityFile.size > 500 * 1024) {
        // Check if file size exceeds 500KB
        alert("File size must not exceed 500KB!");
        return;
      }
      fileData.append("identity", identityFile);
    }

    // Append other form data fields to fileData
    Object.entries(formData).forEach(([key, value]) => {
      fileData.append(key, value);
    });

    setLoading(true); // Set loading to true when the query starts

    const response = await sendFormData(fileData); // Send the form data to the API
    setLoading(false); // Set loading to false when response is received

    if (response.success) {
      swal({
        title: "Success",
        text: "Enquiry Form Sent!",
        icon: "success",
        buttons: true, // Hide buttons
        timer: 10000, // Auto-close after 10 seconds
      });

      // Reset form data after submission
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
      setFile(null);
      setIndentityFile(null);

      // Optionally reload the page after 10 seconds
      setTimeout(() => {
        window.location.reload();
      }, 10000); // Reload after 10 seconds
    } else {
      swal({
        title: "Error",
        text: response.message || "Something went wrong. Please try again.",
        icon: "error",
        buttons: false, // Hide buttons
        timer: 10000, // Auto-close after 10 seconds
      });
    }

    // Optionally handle file upload
    await uploadFiles(fileData); // If needed, you can call the function for file upload here
  };

  return (
    <div>
      <div className="p-3">
        <h1 className="text-2xl text-white text-center font-semibold mb-2">
          {t("form:header")}
        </h1>

        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="loader"></div> {/* Loader component */}
          </div>
        )}

        <form
          className={`relative ${
            loading ? "pointer-events-none opacity-50" : ""
          }`}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full mb-3">
                <input
                  name="firstName"
                  type="text"
                  className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={t("form:firstName")}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 lg:pl-3">
              <div className="relative w-full mb-3">
                <input
                  name="lastName"
                  type="text"
                  className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={formData.lastName}
                  placeholder={t("form:lastName")}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="relative w-full mb-3">
                <input
                  type="text"
                  name="phone"
                  placeholder={t("form:phoneNumber")}
                  className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 lg:pl-3">
              <div className="relative w-full mb-3">
                <input
                  name="email"
                  type="email"
                  placeholder={t("form:email")}
                  className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  htmlFor="medical"
                >
                  {t("form:medicalReport")}
                </label>
                <input
                  type="file"
                  id="medical"
                  name="medical"
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
                  htmlFor="identity"
                >
                  {t("form:identityProof")}
                </label>
                <input
                  type="file"
                  id="identity"
                  name="identity"
                  accept="image/*, .pdf"
                  onChange={({ target }) => {
                    if (target.files) {
                      const file = target.files[0];
                      setIndentityFile(file);
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
                  placeholder={t("form:message")}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-end mr-4">
            <button
              type="submit"
              className=" text-white font-bold bg-primary hover:bg-primary/90 p-2 rounded-xl"
            >
              {t("form:sendButton")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
