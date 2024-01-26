import { RiDoubleQuotesL } from "react-icons/ri";

function TestimonialItem({ text, author }) {
  return (
    <div className="p-6 pt-12 m-12 mt-12 bg-white items-center justify-center rounded-lg gap-4 w-[60vw] object-contain relative">
      <RiDoubleQuotesL size={120} className="text-primary absolute -top-[65px] -left-8" />
      <RiDoubleQuotesL size={120} className="text-darkGrey absolute -top-[61px] -left-6" />
      <p className="text-black italic">{text}</p>
      <p className="text-black text-end font-semibold">{author}</p>
    </div>
  );
}

export default TestimonialItem;
