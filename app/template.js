"use client";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.main>
  );
}