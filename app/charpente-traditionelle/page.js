import Image from "next/image";
import React from "react";
import charpenteTraditionelle from "/assets/img/charp-trad.jpg";
import BackToHomepageButton from "@/components/BackButton";

function CharpenteTraditionelle() {
  return (
    <div className="h-full px-48 py-[150px] flex flex-col">
      <BackToHomepageButton />
      <div className="flex">
        <Image
          src={charpenteTraditionelle}
          width={200}
          height={"auto"}
          alt="yourImg"
          className="w-[300px]"
        />
        <div className="flex flex-col m-12">
          <h1 className="capitalize text-black text-5xl lg:text-nowrap	">Charpente traditionelle</h1>
        </div>
      </div>
    </div>
  );
}

export default CharpenteTraditionelle;
