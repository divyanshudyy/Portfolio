import { useState } from "react";
import ProjectCard from "./ProjectCard";
import BlurText from "../Hero/BlurText";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1738641928021-15dedad586da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://source.unsplash.com/random/300x200?2",
  "https://source.unsplash.com/random/300x200?3",
  "https://source.unsplash.com/random/300x200?4",
  "https://source.unsplash.com/random/300x200?5",
  "https://source.unsplash.com/random/300x200?6",
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? images : images.slice(0, 3);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.7 }}
      className="h-auto w-full flex flex-col justify-center items-center py-10"
    >
      <BlurText
        text="Selected Projects"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl mb-8 text-white font-bold"
      />

      <div className="h-auto w-[65rem] flex flex-col items-center p-6 bg-zinc-900 rounded-2xl">
        <div className="w-full flex gap-8 flex-wrap justify-center items-center">
          <AnimatePresence>
            {visibleImages.map((url, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard imageUrl={url} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm mt-6 px-4 py-2 text-white border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </motion.section>
  );
}
