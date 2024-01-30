import Image from "next/image";
import logobg from "/app/logo-bw.png";

const PopupForm = ({ isOpen, closeModal }) => {
  return (
    <div
      className={`fixed z-100 inset-0 bg-black bg-opacity-50 ${
        isOpen ? "ease-in" : "ease-out opacity-0 pointer-events-none"
      } transition-opacity duration-300 `}
      style={{ zIndex: 100 }}
    >
      <div className="flex items-center justify-center min-h-full">
        <div className="bg-white p-8 rounded-lg shadow-md relative w-[90vw] md:w-[50vw] brick-bg">
          <Image
            src={logobg}
            width={190}
            height={"auto"}
            alt="Background Image"
            className="w-[680px] opacity-5 absolute top-[27%] left-[5px]"
          />
          <h2 className="text-2xl font-semibold mb-4 text-black">Contactez-nous</h2>
          <form>
            <div className="mb-4 relative z-20">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md z-10"
              />
            </div>
            <div className="mb-4 relative z-20">
              <label htmlFor="phone">Numéro de téléphone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border rounded-md z-10"
              />
            </div>
            <div className="mb-4 relative z-20">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md z-10"
              />
            </div>
            <div className="mb-4 relative z-20">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="mt-1 p-2 w-full border rounded-md z-10"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="flex mx-auto primary-button primary-button-bg">
              Envoyer
            </button>
          </form>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
