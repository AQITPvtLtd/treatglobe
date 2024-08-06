import Banner from "@/components/homepage/Banner";
import Hospitals from "@/components/homepage/Hospitals";
import MissionVision from "@/components/homepage/MissionVision";
import Numbers from "@/components/homepage/Numbers";
import Treatments from "@/components/homepage/Treatments";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import TopDoctors from "@/components/homepage/TopDoctors";
import Marquee from "react-fast-marquee";
const i18nNamespaces = [
  "home",
  "form",
  "navbar",
  "about",
  "choose",
  "treatments",
  "tophospitals",
  "numbers",
  "footer",
  "contact",
  "articles",
  "doctors",
  "hospitals",
  "doctorDetailed",
];
export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="overflow-x-clip">
        <Banner />
        <MissionVision />
        <TopDoctors />
        <WhyChooseUs />
        {/* <Treatments /> */}
        <Hospitals />
        <Numbers />
        <div className="bg-primary text-white p-1 mt-10 mb-2 w-full">
          <Marquee>
            <span className="font-bold underline">{t("footer:note")}</span>:{" "}
            {t("footer:notecontent")}&emsp;&emsp;&emsp;
          </Marquee>
        </div>
      </div>
    </TranslationsProvider>
  );
}
