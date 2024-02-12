import { RiDoubleQuotesL } from "react-icons/ri";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

function TestimonialItem({ text, author }) {
  return (
    <div className="p-4 py-10 mt-10 lg:ml-8 items-center bg-primary justify-center rounded-lg w-[90vw] md:w-[40vw] lg:w-[25vw] relative dark-shadow">
      <RiDoubleQuotesL size={100} className="text-primary absolute -top-[65px] -left-8" />
      <RiDoubleQuotesL size={100} className="text-white absolute -top-[61px] -left-6" />
      <p className={`text-white italic text-[17px] ${dosisFont.className}`}>{text}</p>
      <p className="text-primary absolute font-semibold -top-6 right-4 p-3 bg-white rounded-xl">
        {author}
      </p>
    </div>
  );
}

export default TestimonialItem;
