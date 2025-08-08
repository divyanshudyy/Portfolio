import { useState, useEffect, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import BlurText from "../Hero/BlurText";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // 🔥 useMemo prevents array re-creation (fixes animation jitter)
  const visibleProjects = useMemo(() => {
    return showAll ? projects : projects.slice(0, 3);
  }, [showAll]);

  useEffect(() => {
    if (showAll) {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showAll]);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="h-auto w-full flex flex-col justify-center items-center py-10"
    >
      <BlurText
        text="Featured Work"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl mb-8 text-white font-bold"
      />

      <motion.div
        layout
        transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
        className="w-[65rem] flex flex-col items-center p-6 backdrop-blur-md bg-white/12 border border-zinc-700 rounded-4xl"
      >
        <motion.div
          layout
          className="w-full flex flex-wrap gap-8 justify-center items-center"
        >
          <AnimatePresence initial={false}>
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: idx * 0.09 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  videoUrl={project.videoUrl}
                  githubUrl={project.githubUrl}
                  DemoUrl={project.demoUrl}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 text-white px-4 py-2 text-sm flex items-center gap-2 bg-white/5 border border-zinc-700 rounded-xl hover:bg-white/10 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </motion.div>
    </motion.section>
  );
}
