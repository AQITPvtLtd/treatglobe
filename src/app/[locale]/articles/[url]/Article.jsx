"use client";

import React from "react";
import { articles } from "@/data/articles";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";

const Article = ({ url }) => {
  const { t } = useTranslation();
  const filteredArticle = articles.find((a) => a.url === url);
  return (
    <div>
      <div className="lg:grid grid-cols-4">
        <div className="col-span-3 p-4 ">
          <h1 className="text-5xl py-6 font-bold text-center text-primary">
            {t(filteredArticle.name)}
          </h1>
          <div>
            <Image
              src={`/blog/${filteredArticle.image}`}
              width={1000}
              height={1000}
              className="w-full rounded-md"
            />
            <div className="flex pt-2">
              <p className="text-gray-600 flex">
                <SlCalender className="text-primary mt-1 mr-1" />
                {t(filteredArticle.date)}
              </p>
              <p className="text-gray-600 flex ml-10">
                <FaUser className="text-primary mt-1 mr-1" />
                TreatGlobe
              </p>
            </div>
            <div className="mt-4  rounded-lg text-justify">
              <div
                dangerouslySetInnerHTML={{
                  __html: t(filteredArticle.content),
                }}
                className=""
              />
            </div>
          </div>
        </div>
        <div className="p-3 border m-4 rounded-md">
          <h1 className="text-2xl font-bold text-primary">
            {t("articles:subheader")}
          </h1>
          <ul className="mt-3">
            {articles.map((a) => (
              <Link
                href={`/articles/${a.url}`}
                className="flex hover:text-secondary hover:translate-x-2 duration-300"
              >
                <table className="">
                  <tbody>
                    <tr>
                      <td className=" align-top">
                        <FaArrowCircleRight className="mt-1.5 mr-1 " />
                      </td>
                      <td className=" align-top">{t(a.name)}</td>
                    </tr>
                  </tbody>
                </table>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Article;
