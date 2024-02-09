"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const StaticForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const emailRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

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
    <form
      className="bg-transparent relative w-[90vw] lg:w-[40vw] p-0"
      onSubmit={sendMessage}
      action=""
    >
      <div className="mb-4">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          ref={nameRef}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name">Numéro de téléphone</label>
        <input
          type="text"
          id="name"
          name="name"
          ref={phoneRef}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name">Email</label>
        <input
          type="text"
          id="name"
          name="name"
          ref={emailRef}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name">Message</label>
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
        className="flex mx-auto primary-button primary-button-bg"
      >
        Envoyer
      </button>
      <div className="h-4 mt-3">
        {stateMessage && <p className="text-black text-center">{stateMessage}</p>}
      </div>
    </form>
  );
};

export default StaticForm;
