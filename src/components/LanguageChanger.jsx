"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const { t } = useTranslation();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }
  };

  return (
    <div className="">
      <select
        id="language-select"
        onChange={handleChange}
        value="" // Empty value to ensure "Select Language" is selected by default
        className="h-8 my-4 ml-4 bg-secondary text-white rounded-lg text-sm"
      >
        <option value="" disabled>
          {t("language:header")}
        </option>
        <option value="am-ET">Amharic</option>
        <option value="ar">Arabic</option>
        <option value="bn-BD">Bengali</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="ru">Russian</option>
        <option value="uz">Uzbek</option>
      </select>
    </div>
  );
}
