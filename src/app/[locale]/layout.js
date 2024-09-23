import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import Whatsapp from "@/components/common/Whatsapp/Whatsapp";
import Enquiry from "@/components/common/Enquiry/Enquiry";
const inter = Inter({ subsets: ["latin"] });
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
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
  "language",
  "tooltips",
  "articles",
];

export const metadata = {
  title: "TreatGlobe",
  description: "Your travel tourism partner",
};
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}
export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <Header />
          {children}
          <Enquiry />
          <Whatsapp />
          <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
}
