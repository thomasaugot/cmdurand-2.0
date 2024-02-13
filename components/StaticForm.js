"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import localFont from "next/font/local";

const dosisFont = localFont({ src: "../assets/fonts/Dosis-Regular.ttf" });

const StaticForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const emailRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !phoneRef.current.value ||
      !messageRef.current.value
    ) {
      setStateMessage("Veuillez remplir tous les champs.");
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000); // hide message after 5 seconds
      return;
    }

    const templateParams = {
      to_name: "Melvyn",
      from_name: nameRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
      email: emailRef.current.value,
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
    // Clear form fields after submission
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <form
      className="bg-transparent relative w-[90vw] lg:w-[40vw] p-0"
      onSubmit={sendMessage}
      action=""
    >
      <div className="mb-4">
        <label htmlFor="name" className={`${dosisFont.className} text-base font-semibold`}>
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          ref={nameRef}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className={`${dosisFont.className} text-base font-semibold`}>
          Numéro de téléphone
        </label>
        <input
          type="text"
          id="name"
          name="name"
          ref={phoneRef}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className={`${dosisFont.className} text-base font-semibold`}>
          Email
        </label>
        <input
          type="text"
          id="name"
          name="name"
          ref={emailRef}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className={`${dosisFont.className} text-base font-semibold`}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          ref={messageRef}
          className="mt-1 p-2 w-full border rounded-md"
          rows="6"
        ></textarea>
      </div>
      <button
        type="submit"
        value="Send"
        disabled={isSubmitting}
        className={`${dosisFont.className} text-base font-medium tracking-wide flex mx-auto primary-button primary-button-bg`}
      >
        Envoyer
      </button>
      <div className="h-4 mt-3">
        {stateMessage && (
          <p className={`${dosisFont.className} text-black text-center text-base font-semibold`}>
            {stateMessage}
          </p>
        )}
      </div>
    </form>
  );
};

export default StaticForm;
