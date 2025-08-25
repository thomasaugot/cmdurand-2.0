"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaMapPin,
  FaClock,
  FaEuroSign,
  FaTools,
  FaUser,
  FaStar,
  FaUpload,
  FaTrash,
  FaFile,
} from "react-icons/fa";
import { jobOffer, applicationForm } from "@/data/recruitmentData";
import emailjs from "@emailjs/browser";

const RecruitmentModal = ({ isOpen, closeModal }) => {
  const [activeTab, setActiveTab] = useState("offer");
  const [formData, setFormData] = useState({});
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const maxFiles = 5;
    const maxSize = 10 * 1024 * 1024; // 10MB par fichier
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
      "image/jpeg",
      "image/png",
    ];

    // Vérifier le nombre total de fichiers
    if (files.length + selectedFiles.length > maxFiles) {
      setSubmitMessage(`Vous pouvez uploader maximum ${maxFiles} fichiers.`);
      setTimeout(() => setSubmitMessage(""), 5000);
      return;
    }

    const validFiles = [];
    const errors = [];

    selectedFiles.forEach((file) => {
      if (!allowedTypes.includes(file.type)) {
        errors.push(`${file.name}: Type de fichier non supporté`);
      } else if (file.size > maxSize) {
        errors.push(`${file.name}: Fichier trop volumineux (max 10MB)`);
      } else {
        validFiles.push({
          file,
          name: file.name,
          size: file.size,
          type: file.type,
          id: Date.now() + Math.random(),
        });
      }
    });

    if (errors.length > 0) {
      setSubmitMessage(errors.join(", "));
      setTimeout(() => setSubmitMessage(""), 5000);
    }

    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
    }

    // Reset input
    e.target.value = "";
  };

  const removeFile = (fileId) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (fileType) => {
    if (fileType.includes("pdf")) return "📄";
    if (fileType.includes("word") || fileType.includes("document")) return "📝";
    if (fileType.includes("image")) return "🖼️";
    return "📎";
  };

  const convertFilesToBase64 = (files) => {
    return Promise.all(
      files.map((fileObj) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            resolve({
              name: fileObj.name,
              type: fileObj.type,
              content: e.target.result.split(",")[1], // Enlever le préfixe data:...;base64,
            });
          };
          reader.readAsDataURL(fileObj.file);
        });
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation simple
    const requiredFields = applicationForm.fields.filter(
      (field) => field.required
    );
    const missingFields = requiredFields.filter(
      (field) => !formData[field.name]
    );

    if (missingFields.length > 0) {
      setSubmitMessage("Veuillez remplir tous les champs obligatoires.");
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
      return;
    }

    try {
      let attachments = [];

      if (files.length > 0) {
        // Convertir les fichiers en base64 pour l'envoi par EmailJS
        attachments = await convertFilesToBase64(files);
      }

      // Préparer les données pour EmailJS
      const templateParams = {
        to_name: "Melvyn",
        from_name: `${formData.firstName} ${formData.lastName}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        message: formData.motivation,
        attachments: attachments.map((att) => ({
          name: att.name,
          content: att.content,
          contentType: att.type,
        })),
      };

      // Envoi avec EmailJS (même structure que StaticForm)
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_RECRUITMENT,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY || "tJE4pvbpWA5LNecY3"
      );

      setSubmitMessage("Candidature envoyée avec succès !");
      setFormData({});
      setFiles([]);
      setTimeout(() => {
        setSubmitMessage("");
        closeModal();
      }, 2000);
    } catch (error) {
      setSubmitMessage("Erreur lors de l'envoi. Veuillez réessayer.");
      console.error("Erreur:", error);
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="bg-darkGrey text-white p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            >
              <FaTimes size={24} />
            </button>

            <h2 className="text-2xl lg:text-3xl font-bold mb-2">
              {jobOffer.title}
            </h2>

            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2">
                <FaMapPin className="text-primary" />
                {jobOffer.location}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-primary" />
                {jobOffer.type}
              </span>
              <span className="flex items-center gap-2">
                <FaEuroSign className="text-primary" />
                {jobOffer.salary}
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("offer")}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                activeTab === "offer"
                  ? "text-primary border-b-2 border-primary bg-primary/5"
                  : "text-darkGrey hover:text-primary"
              }`}
            >
              Offre d'emploi
            </button>
            <button
              onClick={() => setActiveTab("apply")}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                activeTab === "apply"
                  ? "text-primary border-b-2 border-primary bg-primary/5"
                  : "text-darkGrey hover:text-primary"
              }`}
            >
              Candidater
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            {activeTab === "offer" ? (
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <p className="text-lg text-darkGrey leading-relaxed">
                    {jobOffer.description}
                  </p>
                </div>

                {/* Missions */}
                <div>
                  <h3 className="text-xl font-bold text-darkGrey mb-4 flex items-center gap-2">
                    <FaTools className="text-primary" />
                    Vos missions
                  </h3>
                  <ul className="space-y-2">
                    {jobOffer.missions.map((mission, index) => (
                      <li
                        key={index}
                        className="text-darkGrey flex items-start gap-3"
                      >
                        <span className="text-primary mt-1">•</span>
                        {mission}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Profil */}
                <div>
                  <h3 className="text-xl font-bold text-darkGrey mb-4 flex items-center gap-2">
                    <FaUser className="text-primary" />
                    Profil recherché
                  </h3>
                  <ul className="space-y-2">
                    {jobOffer.profile.map((item, index) => (
                      <li
                        key={index}
                        className="text-darkGrey flex items-start gap-3"
                      >
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Avantages */}
                <div>
                  <h3 className="text-xl font-bold text-darkGrey mb-4 flex items-center gap-2">
                    <FaStar className="text-primary" />
                    Ce que nous offrons
                  </h3>
                  <ul className="space-y-2">
                    {jobOffer.advantages.map((advantage, index) => (
                      <li
                        key={index}
                        className="text-darkGrey flex items-start gap-3"
                      >
                        <span className="text-primary mt-1">•</span>
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-primary/5 p-6 rounded-xl text-center">
                  <p className="text-darkGrey mb-4">
                    Intéressé(e) par cette opportunité ?
                  </p>
                  <button
                    onClick={() => setActiveTab("apply")}
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
                  >
                    Postuler maintenant
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {applicationForm.fields.map((field, index) => (
                    <div
                      key={field.name}
                      className={
                        field.type === "textarea" ? "md:col-span-2" : ""
                      }
                    >
                      <label className="block text-sm font-semibold text-darkGrey mb-2">
                        {field.label}{" "}
                        {field.required && (
                          <span className="text-red-500">*</span>
                        )}
                      </label>

                      {field.type === "select" ? (
                        <select
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleInputChange}
                          required={field.required}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        >
                          {field.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : field.type === "textarea" ? (
                        <textarea
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleInputChange}
                          required={field.required}
                          rows={field.rows || 4}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleInputChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Section Upload de fichiers */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-darkGrey mb-2">
                    Documents (CV, lettre de motivation, etc.)
                  </label>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      <FaUpload className="text-primary text-3xl" />
                      <span className="text-darkGrey font-medium">
                        Cliquez pour sélectionner des fichiers
                      </span>
                      <span className="text-sm text-gray-500">
                        PDF, Word, images - Max 5 fichiers, 10MB chacun
                      </span>
                    </label>
                  </div>

                  {/* Liste des fichiers uploadés */}
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((fileObj) => (
                        <div
                          key={fileObj.id}
                          className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">
                              {getFileIcon(fileObj.type)}
                            </span>
                            <div>
                              <p className="text-sm font-medium text-darkGrey">
                                {fileObj.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {formatFileSize(fileObj.size)}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(fileObj.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit */}
                <div className="flex flex-col items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full md:w-auto bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 ${
                      isSubmitting ? "cursor-wait" : "hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting
                      ? "Envoi en cours..."
                      : "Envoyer ma candidature"}
                  </button>

                  {submitMessage && (
                    <p
                      className={`text-center font-semibold ${
                        submitMessage.includes("Erreur")
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {submitMessage}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RecruitmentModal;
