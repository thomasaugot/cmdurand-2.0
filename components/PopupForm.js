import React from "react";

const PopupForm = ({ isOpen, closeModal }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 ${
        isOpen ? "ease-in" : "ease-out opacity-0 pointer-events-none"
      } transition-opacity duration-300 `}
      style={{ zIndex: 50 }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md relative w-[90vw] md:w-[50vw]">
          <h2 className="text-2xl font-semibold mb-4 text-black">Contactez-nous</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name">Numéro de téléphone</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name">Message</label>
              <textarea
                id="message"
                name="message"
                className="mt-1 p-2 w-full border rounded-md"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary transition text-white py-2 px-4 rounded-md hover:scale-90 flex mx-auto"
            >
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
