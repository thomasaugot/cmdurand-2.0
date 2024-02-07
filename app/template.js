// "use client";
// import { motion } from "framer-motion";

// export default function Template({ children }) {
//   return (
//     <motion.main
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 15 }}
//       transition={{ delay: 0.25 }}
//     >
//       {children}
//     </motion.main>
//   );
// }

"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "tween", duration: 0.5 }}
    >
      {children}
    </motion.main>
  );
}
