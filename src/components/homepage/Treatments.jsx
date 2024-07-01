"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Treatments = () => {
  const { t } = useTranslation();
  const treatment = [
    {
      id: 1,
      name: () => t("treatments:one"),
      image: "oncology.png",
      content:
        "India has achieved remarkable success in cancer treatments, thanks to our embrace of new technology and the evolution of our doctors, who are supported by groundbreaking research. The treatment of any cancer depends on various factors, including the type of cancer, the stage of the disease, the cell type of the cancer cells, and whether the disease has spread to other parts of the body (Metastasis). Based on comprehensive investigative outcomes, treatment options range from surgical excision to chemotherapy, radiation therapy, or a combination of these therapies. Today, cancer treatment in India is equipped with cutting-edge diagnostic technologies and advanced treatment modalities. <br/><br/>Contact us for the best oncology treatment available.",
    },
    {
      id: 2,
      name: () => t("treatments:two"),
      image: "ortho.png",
      content:
        "India has made significant advancements in orthopedic surgery, driven by our adoption of new technologies and the continuous development of our skilled surgeons, supported by pioneering research. The treatment of orthopedic conditions depends on various factors, including the type of injury or disorder, the severity of the condition, the patient’s overall health, and their response to previous treatments. Based on thorough diagnostic evaluations, treatment options may include minimally invasive surgeries, joint replacements, arthroscopy, and rehabilitation therapies. Today, orthopedic surgery in India is equipped with state-of-the-art diagnostic tools and advanced surgical techniques. <br/><br/>Contact us to receive the best orthopedic care available.",
    },
    {
      id: 3,
      name: () => t("treatments:three"),
      image: "neuro.png",
      content:
        "India has made groundbreaking strides in neurosurgery, particularly with the integration of advanced technologies such as the CyberKnife system. Our progress is driven by the expertise of our neurosurgeons, backed by pioneering research and a commitment to adopting innovative treatments. The approach to neurosurgery varies based on the specific neurological condition, its severity, the patient's overall health, and previous treatments. Our comprehensive diagnostic evaluations guide the selection of the most effective treatment options, which may include traditional neurosurgery, minimally invasive techniques, or the use of the CyberKnife system for precise, non-invasive treatment of tumors and other conditions. Today, neurosurgery in India is equipped with cutting-edge diagnostic tools and advanced treatment modalities like the CyberKnife. <br/><br/>Contact us to access the best neurosurgical care and the latest in CyberKnife technology.",
    },
    {
      id: 4,
      name: () => t("treatments:four"),
      image: "spine.png",
      content:
        "India has made remarkable advancements in spine surgery, driven by the integration of cutting-edge technologies and the expertise of our highly skilled surgeons, supported by groundbreaking research. The approach to spine surgery depends on various factors, including the type and severity of the spinal condition, the patient’s overall health, and their response to previous treatments. Based on thorough diagnostic evaluations, treatment options may include minimally invasive spine surgery, spinal fusion, decompression surgery, or advanced procedures like robotic-assisted surgery. Today, spine surgery in India is equipped with state-of-the-art diagnostic tools and advanced surgical techniques. <br/><br/>Contact us to receive the best spine care available.",
    },
    {
      id: 5,
      name: () => t("treatments:five"),
      image: "liver.png",
      content:
        "India has achieved significant milestones in liver transplant surgery, thanks to our adoption of cutting-edge technologies and the expertise of our skilled surgeons, supported by groundbreaking research. The approach to liver transplant surgery depends on various factors, including the type and severity of liver disease, the patient's overall health, and their response to previous treatments. Comprehensive diagnostic evaluations guide the selection of the most appropriate treatment options, which may include living-donor liver transplants, deceased-donor liver transplants, or advanced minimally invasive techniques. Today, liver transplant surgery in India is equipped with state-of-the-art diagnostic tools and advanced surgical methodologies. <br/><br/>Contact us to access the best liver transplant care available.",
    },
    {
      id: 6,
      name: () => t("treatments:six"),
      image: "boneMarrow.png",
      content:
        "India has made significant strides in bone marrow transplant procedures, thanks to the integration of advanced technologies and the expertise of our highly skilled medical professionals, supported by groundbreaking research. The approach to bone marrow transplant depends on various factors, including the type of condition being treated, the patient's overall health, and their compatibility with potential donors. Comprehensive diagnostic assessments guide the selection of the most suitable transplant method, which may include autologous transplantation (using the patient's own cells), allogeneic transplantation (using donor cells), or haploidentical transplantation (using cells from a half-matched donor). Today, bone marrow transplant procedures in India are equipped with state-of-the-art facilities and advanced transplantation techniques. <br/><br/>Contact us to access the best bone marrow transplant care available.",
    },
    {
      id: 7,
      name: () => t("treatments:seven"),
      image: "kidney.png",
      content:
        "India has made significant strides in kidney transplant procedures, thanks to advanced technologies and the expertise of our skilled medical professionals, supported by groundbreaking research. The approach to kidney transplant depends on various factors, including the patient's medical history, the type of kidney disease, and their compatibility with potential donors. Thorough diagnostic assessments guide the selection of the most suitable transplant method, which may include living donor kidney transplant, deceased donor kidney transplant, or paired kidney exchange programs. Today, kidney transplant procedures in India are equipped with state-of-the-art facilities and advanced surgical techniques. <br/><br/>Contact us to access the best kidney transplant care available.",
    },
    {
      id: 8,
      name: () => t("treatments:eight"),
      image: "urology.png",
      content:
        "India has made significant progress in the field of urology, leveraging advanced technologies and the expertise of skilled medical professionals, backed by groundbreaking research. The field of urology encompasses various conditions related to the urinary tract and male reproductive system. Treatment approaches in urology depend on the specific condition, its severity, and the patient's overall health. Comprehensive diagnostic evaluations guide the selection of appropriate treatment options, which may include medications, minimally invasive procedures, endoscopic surgeries, or open surgeries. Today, urology in India is equipped with state-of-the-art diagnostic tools and advanced treatment modalities. <br/><br/>Contact us to access the best urological care available, tailored to your individual needs.",
    },
    {
      id: 9,
      name: () => t("treatments:nine"),
      image: "ent.png",
      content: `India has made significant advancements in the field of Otorhinolaryngology, commonly known as ENT (Ear, Nose, and Throat), owing to the integration of advanced technologies and the expertise of skilled medical professionals, backed by groundbreaking research.
  
      ENT deals with a wide range of conditions related to the ears, nose, throat, head, and neck. Treatment approaches in ENT depend on the specific condition, its severity, and the patient's overall health. Comprehensive diagnostic evaluations guide the selection of appropriate treatment options, which may include medications, surgical interventions, hearing aids, or speech therapy.
      
      Today, ENT care in India is equipped with state-of-the-art diagnostic tools and advanced treatment modalities. <br/><br/>Contact us to access the best ENT care available, personalized to meet your individual needs.`,
    },
    {
      id: 10,
      name: () => t("treatments:ten"),
      image: "gynac.png",
      content: `India has witnessed remarkable advancements in the field of gynecology, driven by the integration of advanced technologies and the expertise of skilled medical professionals, supported by groundbreaking research.
  
      Gynecology focuses on the health of the female reproductive system, covering a wide range of conditions such as menstrual disorders, infertility, pregnancy, and menopause. Treatment approaches in gynecology are tailored to each patient's specific needs and may include medication, minimally invasive procedures, surgical interventions, hormonal therapies, or fertility treatments.
      
      Today, gynecological care in India is equipped with state-of-the-art diagnostic tools and advanced treatment modalities. <br/><br/>Contact us to access the best gynecological care available, provided with compassion and expertise.`,
    },
    {
      id: 11,
      name: () => t("treatments:eleven"),
      image: "ivf.png",
      content: `In vitro fertilization (IVF) has seen remarkable progress in India, owing to advanced technologies and the expertise of skilled fertility specialists, supported by pioneering research.
  
      IVF is a reproductive technology used to assist individuals or couples in achieving pregnancy when natural conception is not successful. The process involves fertilizing an egg with sperm outside the body in a laboratory setting and then transferring the resulting embryo(s) into the uterus.
      
      IVF treatment in India is tailored to individual needs, with comprehensive diagnostic assessments guiding the process. This may include ovarian stimulation, egg retrieval, sperm collection, fertilization in the lab, embryo culture, and embryo transfer. Additional techniques like intracytoplasmic sperm injection (ICSI), preimplantation genetic testing (PGT), and frozen embryo transfer (FET) are also utilized as needed.
      
      Today, IVF clinics in India are equipped with state-of-the-art facilities and advanced techniques, offering hope and support to individuals and couples seeking fertility solutions. <br/><br/>Contact us to explore the best IVF care available, personalized to your unique situation and goals.`,
    },
  ];
  return (
    <div className="mt-20 bg-gradient-to-t from-secondary to-white relative">
      <Image
        src="/services.png"
        width={2000}
        height={1000}
        className="w-full lg:h-[1100px] h-[2100px] object-cover"
        alt="treatmentBanner"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl mx-10 text-center lg:pt-10 font-serif mb-4 text-white">
          {t("treatments:header")}
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-8">
          {treatment.map((t) => (
            <div key={t.id} className="flex flex-col items-center p-5">
              <div className="">
                <div className="hover:scale-105 lg:h-[200px] lg:w-[300px] w-[150px] h-[150px] flex items-center justify-center overflow-hidden">
                  <Image
                    src={`/treatments/${t.image}`}
                    width={500}
                    height={500}
                    alt="treatment"
                    className="object-fit lg:h-[200px] lg:w-[400px] w-[150px] h-[150px]  rounded-md border-8 border-primary"
                  />
                </div>
              </div>
              <div className="text-center text-xl font-semibold mt-4 text-white">
                {/* Show treatment names */}
                {t.name()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Treatments;
