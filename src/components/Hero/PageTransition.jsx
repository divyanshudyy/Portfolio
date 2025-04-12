import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1000); // Adjust the duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-md"
        />
      )}
    </AnimatePresence>
  );
}
