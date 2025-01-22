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
import Script from "next/script"; // Correct Next.js Script import
import Image from "next/image";

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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Adding the Meta Pixel Script */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '926766189586191');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=926766189586191&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
      </head>
      <body className={inter.className}>

        {/* Application content */}
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
