import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FaUser, FaPhone, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";
import logobg from "/app/logo-bw.png";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import localFont from "next/font/local";

const robotoFont = localFont({ src: "../../assets/fonts/RobotoMono-Regular.ttf" });
const dosisFont = localFont({ src: "../../assets/fonts/Dosis-Regular.ttf" });

const PopupForm = ({ isOpen, closeModal }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const emailRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !phoneRef.current.value ||
      !messageRef.current.value
    ) {
      setStateMessage("Veuillez remplir tous les champs.");
      setMessageType("error");
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
        setMessageType(null);
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
          setStateMessage("Message envoyé avec succès !");
          setMessageType("success");
          setIsSubmitting(false);
          
          nameRef.current.value = "";
          emailRef.current.value = "";
          phoneRef.current.value = "";
          messageRef.current.value = "";
          
          setTimeout(() => {
            setStateMessage(null);
            setMessageType(null);
            closeModal();
          }, 2500);
        },
        function (error) {
          setStateMessage("Échec lors de l'envoi, veuillez réessayer");
          setMessageType("error");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
            setMessageType(null);
          }, 5000);
        }
      );
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ 
              type: "spring",
              damping: 20,
              stiffness: 300
            }}
            className="bg-white rounded-3xl shadow-2xl relative w-full max-w-2xl brick-bg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white p-8 rounded-t-3xl">
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors p-3 rounded-full hover:bg-white/20 z-20"
                aria-label="Fermer"
              >
                <IoMdClose size={28} />
              </button>
              
              <div className="relative z-10">
                <h2 className={`${robotoFont.className} text-2xl font-bold mb-3 leading-none uppercase`}>
                  Parlons de votre projet
                </h2>
                <p className={`${dosisFont.className} text-white/90 text-lg`}>
                  Nous vous répondons sous 24h
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="p-8">
              <form onSubmit={sendMessage} className="space-y-6">
                {/* Name & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`${dosisFont.className} text-darkGrey font-semibold text-base flex items-center gap-2 mb-2`}>
                      <FaUser className="text-primary" />
                      Nom complet
                    </label>
                    <input
                      type="text"
                      ref={nameRef}
                      placeholder="Votre nom et prénom"
                      className="w-full p-3 border-2 border-lightGrey rounded-xl focus:border-primary focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white text-base"
                    />
                  </div>
                  <div>
                    <label className={`${dosisFont.className} text-darkGrey font-semibold text-base flex items-center gap-2 mb-2`}>
                      <FaPhone className="text-primary" />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      ref={phoneRef}
                      placeholder="06 12 34 56 78"
                      className="w-full p-3 border-2 border-lightGrey rounded-xl focus:border-primary focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white text-base"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={`${dosisFont.className} text-darkGrey font-semibold text-base flex items-center gap-2 mb-2`}>
                    <FaEnvelope className="text-primary" />
                    Email
                  </label>
                  <input
                    type="email"
                    ref={emailRef}
                    placeholder="votre@email.com"
                    className="w-full p-3 border-2 border-lightGrey rounded-xl focus:border-primary focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white text-base"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={`${dosisFont.className} text-darkGrey font-semibold text-base flex items-center gap-2 mb-2`}>
                    <FaComment className="text-primary" />
                    Votre projet
                  </label>
                  <textarea
                    ref={messageRef}
                    rows="3"
                    placeholder="Décrivez-nous votre projet : type de travaux, surface, délais..."
                    className="w-full p-3 border-2 border-lightGrey rounded-xl focus:border-primary focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white text-base resize-none"
                  />
                </div>

                {/* Status Message */}
                <AnimatePresence>
                  {stateMessage && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className={`p-4 rounded-xl text-center font-medium text-base ${
                        messageType === "success"
                          ? "bg-green-100 text-green-800 border-2 border-green-200"
                          : "bg-red-100 text-red-800 border-2 border-red-200"
                      }`}
                    >
                      {stateMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${dosisFont.className} w-full bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Envoyer ma demande
                    </>
                  )}
                </button>
              </form>

              {/* Footer Info */}
              <div className="mt-6 bg-primary/5 rounded-xl p-4 text-center">
                <p className={`${dosisFont.className} text-darkGrey font-medium`}>
                  <span className="text-primary font-bold">Réponse garantie sous 24h</span> • Devis gratuit et sans engagement
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;