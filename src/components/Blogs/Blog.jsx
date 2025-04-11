import { useState } from "react";
import ProjectCard from "../project/ProjectCard";
import BlurText from "../Hero/BlurText";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1657638323016-b9b802f1756b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1657638323016-b9b802f1756b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1657638323016-b9b802f1756b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1657638323016-b9b802f1756b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1657638323016-b9b802f1756b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1657638323016-b9b802f1756b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? images : images.slice(0, 3);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="h-auto w-full flex flex-col justify-center items-center py-10"
    >
      <BlurText
        text="Blogs & Case Studies"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl mb-8 text-white font-bold"
      />

      <motion.div
        layout
        transition={{
          layout: { duration: 0.3, ease: "easeInOut" },
        }}
        className="w-[65rem] flex flex-col items-center bg-zinc-900 rounded-2xl p-6"
      >
        <motion.div
          layout
          className="w-full flex flex-wrap gap-8 justify-center items-center"
        >
          <AnimatePresence initial={false}>
            {(showAll ? images : images.slice(0, 3)).map((url, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard imageUrl={url} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.button
          layout
          onClick={() => setShowAll(!showAll)}
          className="text-sm mt-6 px-4 py-2 text-white border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          {showAll ? "View Less" : "View More"}
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
