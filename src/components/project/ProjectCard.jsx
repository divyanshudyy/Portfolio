import SpotlightCard from "./SpotlightCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

function DescriptionText({ text = "", maxLength = 100 }) {
  const shouldTruncate = text.length > maxLength;
  if (!shouldTruncate)
    return <p className="text-sm text-muted-foreground">{text}</p>;

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const timeoutRef = useRef(null);

  // Handle mouse movement to show controls temporarily
  const handleMouseMove = () => {
    if (!isPlaying) return;

    setShowControls(true);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2000);
  };

  // Toggle play/pause and update state
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
    } else {
      video.play();
      setIsPlaying(true);
      setShowControls(false);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <Dialog>
      <DialogTrigger>
        <SpotlightCard className="h-80 w-72 text-white flex flex-col backdrop-blur-md  bg-zinc-950/65 border border-zinc-700">
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

      <DialogContent
        className={`w-full max-w-5xl h-[28rem] flex bg-neutral-900 p-0 overflow-hidden rounded-xl border border-zinc-800 
        ${!showControls ? "cursor-none" : "cursor-default"}`}
      >
        <div
          className="w-2/3 h-full flex items-center justify-center relative bg-zinc-950"
          onMouseMove={handleMouseMove}
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-[90%] rounded-lg overflow-hidden shadow-lg relative"
          >
            <div
              onMouseMove={handleMouseMove}
              className="w-[90%] rounded-lg overflow-hidden shadow-lg relative"
            >
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-cover"
                muted
                playsInline
                onEnded={() => {
                  setIsPlaying(false);
                  setShowControls(true);
                }}
              />

              <AnimatePresence>
                {showControls && (
                  <motion.div
                    key="control-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={togglePlayPause}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg flex items-center justify-center transition hover:scale-105">
                      {isPlaying ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 9v6m4-6v6"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/40">
            Project preview — click to play/pause
          </p>
        </div>

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
