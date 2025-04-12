import SpotlightCard from "./SpotlightCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

// Separate component for description truncation logic
function DescriptionText({ text = "", maxLength = 100 }) {
  const shouldTruncate = text.length > maxLength;

  if (!shouldTruncate) {
    return <p className="text-sm text-muted-foreground">{text}</p>;
  }

  const truncated = text.slice(0, maxLength);

  return (
    <p className="text-sm text-muted-foreground">
      {truncated}
      <span className="text-blue-400 italic">...more</span>
    </p>
  );
}

export default function ProjectCard({
  imageUrl,
  videoUrl,
  title,
  description,
  githubUrl,
  DemoUrl,
}) {
  const videoRef = useRef(null);
  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => videoRef.current?.pause();

  return (
    <Dialog>
      <DialogTrigger>
        <SpotlightCard className="h-80 w-72 text-white flex flex-col">
          <img
            src={imageUrl}
            alt="Project"
            className="w-full h-44 object-cover rounded-t-lg"
          />
          <div className="flex flex-col gap-2 px-4 py-3">
            <h1 className="text-lg font-semibold">{title}</h1>
            <DescriptionText text={description} />
          </div>
        </SpotlightCard>
      </DialogTrigger>

      <DialogContent className="w-full max-w-5xl h-[28rem] flex bg-neutral-900 p-0 overflow-hidden rounded-xl border border-zinc-800">
        {/* Left: Video */}
        <div className="w-2/3 h-full flex items-center justify-center relative bg-zinc-950">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-[90%] rounded-lg overflow-hidden shadow-lg"
          >
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-cover"
              muted
            />
          </motion.div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/40">
            Project preview — hover to play
          </p>
        </div>

        {/* Right: Info */}
        <div className="w-1/3 h-full flex flex-col justify-center px-6 py-8 gap-6 bg-neutral-900 text-white">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          <div className="flex gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
            >
              View Code
            </a>
            <a
              href={DemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
