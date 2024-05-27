import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Treat Globe",
  description: "Your best travel tourism partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
