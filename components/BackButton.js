import { FaHome } from "react-icons/fa";
import Link from "next/link";

const BackToHomepageButton = () => {
  return (
    <Link
      href="/"
      className="flex items-center text-darkGrey font-medium underline underline-offset-2 md:decoration-0 text-lg hover:underline"
    >
      <FaHome className="mr-2" />
      Retour à l&apos;accueil
    </Link>
  );
};

export default BackToHomepageButton;
