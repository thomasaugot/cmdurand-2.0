import { IoMdStar } from "react-icons/io";
import google from "/assets/img/google.png";
import Image from "next/image";

function GoogleWidget() {
  return (
    <div className="p-6 my-auto bg-white flex flex-col items-center justify-center rounded-lg gap-4">
      <h1 className="text-black text-3xl transition duration-200 hover:scale-125">Excellent</h1>
      <div className="flex text-[#FFFF00]">
        <IoMdStar size={25} />
        <IoMdStar size={25} />
        <IoMdStar size={25} />
        <IoMdStar size={25} />
        <IoMdStar size={25} />
      </div>
      <h4 className="flex text-black text-xl items-center gap-2">
        sur{" "}
        <span>
          <Image src={google} width={"auto"} height={"auto"} alt="logo" className="w-[150px]" />
        </span>
      </h4>{" "}
      <a
        href="https://www.google.com/search?sca_esv=601739216&rlz=1C1ONGR_frFR1029FR1030&tbm=lcl&sxsrf=ACQVn0-fWAj5KZ3_YMpjnAs56s2pPg6k0w:1706281887129&q=Charpente+Menuiserie+Durand+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NLSwsDC1NLIwszAzMTM0NDA12MDI-IpR2TkjsaggNa8kVcE3Na80szi1KDNVwaW0KDEvRSEotSwztbx4ESsxqgAd6xn9ZgAAAA&rldimm=1188859286864611050&hl=en-FR&sa=X&ved=2ahUKEwjahpOuq_uDAxVmbKQEHTqqAiEQ9fQKegQIRBAF&biw=1366&bih=607&dpr=1#lkt=LocalPoiReviews&lrd=0x480f89d613b78025:0x107fad38f97d46ea,3,,,,"
        target="_blank"
        rel="noreferrer"
        className="text-white text-lg bg-darkGrey p-4 rounded-lg transition hover:scale-95 text-center"
      >
        Donnez votre avis!
      </a>
    </div>
  );
}

export default GoogleWidget;
