// include all the code you want to see on every pages, such as a navbar or a footer, here:

import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Footer from "@/components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import logo from "../app/logo.png";
import Image from "next/image";
import ContactDetails from "@/components/ContactDetails";
import ContactDetailsService from "@/components/ContactDetailsService";

library.add(fab);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Charpente Menuiserie Durand",
  description: "Site Web officiel de Charpente Menuiserie Durand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./icon.png" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="charpente, menuiserie, missillac, construction, durand, loire-atlantique, pontchateau, donges, prinquiau, besné, crossac, maison, terrasse, solivage, carport, entreprise, extension, preau, aménagement, combles, bois, bardage, travaux, devis"
        />
      </Head>
      <body className={`${inter.className} bg-white`}>
        <div className="relative">
          <div className="fixed lg:absolute z-40 lg:z-0 w-[100vw] h-[100px] backdrop-blur-[7px] px-10"></div>
          <Link href={"/"}>
            <Image
              src={logo}
              width={"auto"}
              height={"auto"}
              alt="logo"
              className="fixed w-[230px] h-auto z-40 lg:z-10 block lg:absolute py-3 px-8"
            />
          </Link>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
