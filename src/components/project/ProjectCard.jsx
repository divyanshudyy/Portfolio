import SpotlightCard from "./SpotlightCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ imageUrl, videoUrl }) {
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
            <h1 className="text-lg font-semibold">CodeFlow</h1>
            <p className="text-sm text-muted-foreground">
              A seamless platform that enhances collaboration and automates
              workflows for developers.
            </p>
          </div>
        </SpotlightCard>
      </DialogTrigger>

      <DialogContent className="w-full max-w-5xl h-[28rem] flex bg-neutral-900 p-0 overflow-hidden rounded-xl border border-zinc-800">
        {/* Left: Video Section */}
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
            Hover to play the video
          </p>
        </div>

        {/* Right: Info Section */}
        <div className="w-1/3 h-full flex flex-col justify-center px-6 py-8 gap-6 bg-neutral-900 text-white">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project Showcase</h2>
            <p className="text-sm text-muted-foreground">
              Explore this project’s functionality, see it in action, and get
              hands-on!
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition">
              View Code
            </button>
            <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
              Live Demo
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
