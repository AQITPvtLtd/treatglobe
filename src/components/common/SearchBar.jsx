"use client";

import React, { useState, useEffect, useRef } from "react";
import { doctordata } from "@/data/doctordata";
import { hospitals } from "@/data/hospitals";
import { treatment } from "@/data/treatments";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [filteredTreatments, setFilteredTreatments] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const searchRef = useRef();
  const { t } = useTranslation();

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery === "") {
      setFilteredDoctors([]);
      setFilteredHospitals([]);
      setFilteredTreatments([]);
      setIsDropdownVisible(false);
      return;
    }

    const filteredDoctors = doctordata.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchQuery)
    );

    const filteredHospitals = hospitals.filter((hospital) =>
      hospital.name.toLowerCase().includes(searchQuery)
    );

    const filteredTreatments = treatment
      .map((tr) => ({
        ...tr,
        translatedName: t(tr.name).toLowerCase(),
      }))
      .filter((tr) => tr.translatedName.includes(searchQuery));

    setFilteredDoctors(filteredDoctors);
    setFilteredHospitals(filteredHospitals);
    setFilteredTreatments(filteredTreatments);
    setIsDropdownVisible(true); // Show the dropdown
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setQuery("");
      setFilteredDoctors([]);
      setFilteredHospitals([]);
      setFilteredTreatments([]);
      setIsDropdownVisible(false); // Hide the dropdown
    }
  };

  const handleResultClick = () => {
    setQuery("");
    setFilteredDoctors([]);
    setFilteredHospitals([]);
    setFilteredTreatments([]);
    setIsDropdownVisible(false); // Hide the dropdown
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full p-6" ref={searchRef}>
      <input
        type="text"
        placeholder="Search doctors, hospitals or treatments..."
        value={query}
        onChange={handleSearch}
        className="w-full p-3 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {isDropdownVisible && (
        <div className="absolute top-20 left-0 right-0 z-50 bg-white border shadow-lg rounded-lg p-6 max-h-[500px] overflow-y-auto">
          {filteredDoctors.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  Doctors ({filteredDoctors.length})
                </h3>
              </div>
              <ul className="space-y-2">
                {filteredDoctors.map((doctor) => (
                  <Link
                    href={`/doctors/${doctor.hid}/${doctor.id}`}
                    key={doctor.id}
                    className="flex hover:bg-blue-100 p-1"
                    onClick={handleResultClick}
                  >
                    <div className="flex items-center">
                      <Image
                        src={`/doctors/${doctor.hid}/${doctor.image}`}
                        width={100}
                        height={100}
                        className="object-cover w-10 h-10"
                      />
                    </div>
                    <li className="p-1 text-gray-800 rounded-md transition-colors duration-300">
                      {doctor.name}
                      <p className="text-sm text-blue-800">{t(doctor.post)}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
          {filteredHospitals.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  Hospitals ({filteredHospitals.length})
                </h3>
              </div>
              <ul className="space-y-2">
                {filteredHospitals.map((hospital) => (
                  <Link
                    href={`/hospitals/${hospital.id}`}
                    key={hospital.id}
                    className="flex hover:bg-blue-100 p-1"
                    onClick={handleResultClick}
                  >
                    <div className="flex items-center">
                      <Image
                        src={`/hospitals/${hospital.image}`}
                        width={100}
                        height={100}
                        className="object-cover w-10 h-10"
                      />
                    </div>
                    <li className="p-2 text-gray-800 rounded-md transition-colors duration-300">
                      {hospital.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
          {filteredTreatments.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  Treatments ({filteredTreatments.length})
                </h3>
              </div>
              <ul className="space-y-2">
                {filteredTreatments.map((tr) => (
                  <Link
                    href={`/treatments/${tr.url}`}
                    key={tr.id}
                    className="flex hover:bg-blue-100 p-1"
                    onClick={handleResultClick}
                  >
                    <div className="flex items-center">
                      <Image
                        src={`/treatments/${tr.image}`}
                        width={100}
                        height={100}
                        className="object-cover w-10 h-10"
                      />
                    </div>
                    <li className="p-2 text-gray-800 rounded-md transition-colors duration-300">
                      {t(tr.name)}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
          {filteredDoctors.length === 0 &&
            filteredHospitals.length === 0 &&
            filteredTreatments.length === 0 &&
            query !== "" && (
              <div className="text-center text-gray-600">
                <p>No results found for "{query}".</p>
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
