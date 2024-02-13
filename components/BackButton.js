import { FaHome } from "react-icons/fa";
import Link from "next/link";

const BackToHomepageButton = () => {
  return (
    <Link
      href="/"
      className="flex items-center text-darkGrey font-semibold underline underline-offset-2 lg:decoration-0 text-xl md:text-2xl xl:text-xl hover:underline tracking-wider"
    >
      <FaHome className="mr-2" />
      Retour à l&apos;accueil
    </Link>
  );
};

export default BackToHomepageButton;
