"use client";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

function TestimonialCard({ testimonial }) {
  const { author, rating, date, text, type } = testimonial;

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-lg" />
          ))}
        </div>
        <FaQuoteLeft className="text-primary text-2xl opacity-20" />
      </div>

      {/* Testimonial Text */}
      <blockquote
        className="text-black leading-relaxed mb-6 text-base flex-grow"
      >
        "{text}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span
              className="text-white font-bold text-lg"
            >
              {author.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="font-bold text-black">
              {author}
            </h4>
            <p className="text-sm text-gray-500">
              {date}
            </p>
          </div>
        </div>

        <span
          className="text-xs text-primary bg-secondary px-3 py-1 rounded-full font-medium"
        >
          {type}
        </span>
      </div>
    </div>
  );
}

export default TestimonialCard;
