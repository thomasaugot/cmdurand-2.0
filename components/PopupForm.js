"use client";

import Image from "next/image";
import logobg from "/app/logo-bw.png";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const PopupForm = ({ isOpen, closeModal }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const emailRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    const templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        "tJE4pvbpWA5LNecY3"
      )
      .then(
        function (response) {
          setStateMessage("Message envoyé!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        function (error) {
          setStateMessage("Echec lors de l'envoi, veuillez réessayer");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div
      className={`fixed z-100 inset-0 bg-black bg-opacity-50 ${
        isOpen ? "ease-in" : "ease-out opacity-0 pointer-events-none"
      } transition-opacity duration-300 `}
      style={{ zIndex: 100 }}
    >
      <div className="flex items-center justify-center min-h-full">
        <div className="bg-white p-8 rounded-lg shadow-md relative w-[90vw] lg:w-[50vw] brick-bg">
          <Image
            src={logobg}
            width={190}
            height={"auto"}
            alt="Background Image"
            className="w-[680px] opacity-5 absolute top-[27%] left-[5px]"
          />
          <h2 className="text-2xl font-semibold mb-4 text-black">Contactez-nous</h2>
          <form onSubmit={sendMessage} action="">
            <div className="mb-4 relative z-20">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                ref={nameRef}
                className="mt-1 p-2 w-full border rounded-md z-10"
              />
            </div>
            <div className="mb-4 relative z-20">
              <label htmlFor="phone">Numéro de téléphone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                ref={phoneRef}
                className="mt-1 p-2 w-full border rounded-md z-10"
              />
            </div>
            <div className="mb-4 relative z-20">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                ref={emailRef}
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
                ref={messageRef}
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send"
              disabled={isSubmitting}
              className="flex mx-auto primary-button primary-button-bg"
            >
              Envoyer
            </button>
            <div className="h-6">
              {stateMessage && <p className="text-black text-center">{stateMessage}</p>}
            </div>
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
