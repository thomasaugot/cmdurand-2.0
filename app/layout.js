import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Footer from "@/components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import logo from "../app/logo.png";
import Image from "next/image";
import localFont from "next/font/local";

library.add(fab);

const inter = Inter({ subsets: ["latin"] });
const gotamFont = localFont({ src: "../assets/fonts/Gotham Nights.otf" });
const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

export const metadata = {
  title: "Charpente Menuiserie Durand | Missillac (44)",
  description:
    "Spécialiste en charpente et menuiserie pour la construction et la rénovation, à Missillac (44) et sa région.",
  author: "Melvyn Durand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <link rel="icon" href="./icon.png" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="charpente, ouest, bretagne, pme, 44, 56, menuiserie, missillac, construction, durand, loire-atlantique, pontchateau, donges, prinquiau, besné, crossac, la baule, pornichet, sur mesure, maison, terrasse, solivage, carport, entreprise, extension, preau, aménagement, combles, bois, bardage, travaux, devis"
        />
      </Head>
      <body className={`${gotamFont.className} bg-white`} hrefLang="fr">
        <div className="relative">
          <div className="fixed lg:absolute z-40 lg:z-0 w-[100vw] h-[100px] backdrop-blur-[7px] px-10"></div>
          <Link href={"/"}>
            <Image
              src={logo}
              width={"auto"}
              height={"auto"}
              alt="Logo Charpente Menuiserie Durand"
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
