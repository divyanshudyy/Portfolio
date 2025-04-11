import SpotlightCard from "./SpotlightCard";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProjectCard({ imageUrl }) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <SpotlightCard className="custom-spotlight-card h-80 w-72 text-white flex flex-col">
            <img
              src={imageUrl }
              alt="Project Image"
              className="w-full h-45 object-cover"
            />
            <div className="flex flex-col gap-2" style={{ padding: "0 1rem" }}>
              <h1 className="text-xl font-semibold">CodeFlow</h1>
              <p className="text-sm text-gray-400">
                A seamless platform that enhances collaboration and automates
                workflows for developers, making code management effortless.
              </p>
            </div>
          </SpotlightCard>
        </DialogTrigger>
        <DialogContent className="h-2/3 w-screen max-w-none flex flex-row bg-neutral-900 gap-0 rounded-lg overflow-hidden">
          <div className="w-2/3 h-full flex justify-center items-center bg-neutral-900">
            <div className="w-full rounded-xl overflow-hidden">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                className="w-full h-full object-cover"
                muted
                autoPlay
              />
            </div>
          </div>

          <div className="w-1/3 h-full bg-neutral-900 flex flex-col justify-center gap-4 text-white">
            <h2 className="text-2xl font-semibold">Project Showcase</h2>
            <p className="text-sm text-muted-foreground">
              Explore the details of this project, see how it works in action,
              and take the next step!
            </p>

            <div className="flex gap-4 mt-4">
              <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                View Code
              </button>
              <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors">
                Live Demo
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
