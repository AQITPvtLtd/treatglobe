"use client";

import React, { useState, useEffect, useRef } from "react";
import { doctordata } from "@/data/doctordata";
import { hospitals } from "@/data/hospitals";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  // State for search input and filtered results
  const [query, setQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);

  // Ref to detect clicks outside the search results
  const searchRef = useRef();
  const { t } = useTranslation();

  // Handle search input change
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    // If query is empty, clear results
    if (searchQuery === "") {
      setFilteredDoctors([]);
      setFilteredHospitals([]);
      return;
    }

    // Filter doctors by search query
    const filteredDoctors = doctordata.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchQuery)
    );

    // Filter hospitals by search query
    const filteredHospitals = hospitals.filter((hospital) =>
      hospital.name.toLowerCase().includes(searchQuery)
    );

    setFilteredDoctors(filteredDoctors);
    setFilteredHospitals(filteredHospitals);
  };

  // Hide results when clicking outside the search bar and result container
  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setQuery("");
      setFilteredDoctors([]);
      setFilteredHospitals([]);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative container p-6" ref={searchRef}>
      {/* Search Input */}
      <div>
        <input
          type="text"
          placeholder="Search doctors or hospitals..."
          value={query}
          onChange={handleSearch}
          className="w-full max-w-md p-3 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Results */}
      {query !== "" && (
        <div className="absolute top-20 left-0 right-0 z-50 bg-white border shadow-lg rounded-lg p-6 max-h-[500px] overflow-y-auto">
          {/* Doctors Section */}
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

          {/* No Results Message */}
          {filteredDoctors.length === 0 &&
            filteredHospitals.length === 0 &&
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
