import { useState } from "react";
import ProjectCard from "./ProjectCard";
import BlurText from "../Hero/BlurText";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1738641928021-15dedad586da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1738641928021-15dedad586da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1738641928021-15dedad586da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1738641928021-15dedad586da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1738641928021-15dedad586da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1738641928021-15dedad586da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
];

const title = ["SamsungEvolve", "Title B", "Title C"];
const description = [
  "A modern redesign of the Samsung website, delivering a sleek and interactive user experience.A modern redesign of the Samsung website, delivering a sleek and interactive user experience.",
  "A modern redesign of the Samsung website, delivering a sleek and interactive user experience.",
  "A modern redesign of the Samsung website, delivering a sleek and interactive user experience.",
  "A modern redesign of the Samsung website, delivering a sleek and interactive user experience.",
  "Descp B",
  "Descp C",
];
const github = ["https://github.com/divyanshudyy/Reimagine_Hackathon_II"];

const demo = [
  "https://samsung-evolve-8jbkkifee-divyanshu-divys-projects.vercel.app",
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? images : images.slice(0, 3);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="h-auto w-full flex flex-col justify-center items-center py-10 "
    >
      <BlurText
        text="Selected Projects"
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
        className="w-[65rem] flex flex-col items-center p-6 backdrop-blur-md  bg-white/12 border border-zinc-700 rounded-4xl "
      >
        <motion.div
          layout
          className="w-full flex flex-wrap gap-8 justify-center items-center "
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
                <ProjectCard
                  imageUrl={url}
                  videoUrl={videos[idx]}
                  title={title[idx]}
                  description={description[idx]}
                  githubUrl={github[idx]}
                  DemoUrl={demo[idx]}
                  className=""
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Button
          variant="outline"
          size="icon"
          className="mt-6 text-white  w-20 backdrop-blur-md  bg-white/0 border border-zinc-700"
          onMouseOver={() => setShowAll(!showAll)}
        >
          <motion.div
            animate={{ rotate: showAll ? -90 : 90 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight className="h-5 w-5" />
          </motion.div>
        </Button>
      </motion.div>
    </motion.section>
  );
}
