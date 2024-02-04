import emailjs from "@emailjs/browser";
import { useState } from "react";

const StaticForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("success!!!");
          setStateMessage("Message envoyé!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Echec lors de l'envoi, veuillez réessayer");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <form className="bg-transparent relative w-[90vw] lg:w-[40vw] p-0" onSubmit={sendEmail}>
      <div className="mb-4">
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="name">Numéro de téléphone</label>
        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="name">Email</label>
        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="name">Message</label>
        <textarea
          id="message"
          name="message"
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
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};

export default StaticForm;
