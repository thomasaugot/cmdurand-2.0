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
    setIsSubmitting(true);

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
      }, 5000);
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
          // Clear form fields after successful submission
          nameRef.current.value = "";
          emailRef.current.value = "";
          phoneRef.current.value = "";
          messageRef.current.value = "";
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        function (error) {
          setStateMessage("Echec lors de l'envoi, veuillez réessayer");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
  };

  return (
    <form
      className="w-full max-w-lg mx-auto lg:max-w-none"
      onSubmit={sendMessage}
    >
      {/* Name Field */}
      <div className="mb-4 sm:mb-6">
        <label
          htmlFor="name"
          className="block text-sm sm:text-base font-semibold text-darkGrey mb-2"
        >
          Nom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          ref={nameRef}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base"
          placeholder="Votre nom complet"
        />
      </div>

      {/* Phone Field */}
      <div className="mb-4 sm:mb-6">
        <label
          htmlFor="phone"
          className="block text-sm sm:text-base font-semibold text-darkGrey mb-2"
        >
          Numéro de téléphone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          ref={phoneRef}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base"
          placeholder="06 12 34 56 78"
        />
      </div>

      {/* Email Field */}
      <div className="mb-4 sm:mb-6">
        <label
          htmlFor="email"
          className="block text-sm sm:text-base font-semibold text-darkGrey mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          ref={emailRef}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base"
          placeholder="votre@email.com"
        />
      </div>

      {/* Message Field */}
      <div className="mb-6 sm:mb-8">
        <label
          htmlFor="message"
          className="block text-sm sm:text-base font-semibold text-darkGrey mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          ref={messageRef}
          rows="4"
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none text-sm sm:text-base"
          placeholder="Décrivez votre projet..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base ${
          isSubmitting ? "cursor-wait" : "hover:shadow-lg hover:scale-[1.02]"
        }`}
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </button>

      {/* Status Message */}
      <div className="mt-4 min-h-[1.5rem]">
        {stateMessage && (
          <p
            className={`text-center text-sm sm:text-base font-semibold ${
              stateMessage.includes("envoyé")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {stateMessage}
          </p>
        )}
      </div>
    </form>
  );
};

export default StaticForm;
