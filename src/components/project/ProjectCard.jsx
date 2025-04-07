import SpotlightCard from "./SpotlightCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProjectCard() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          {" "}
          <SpotlightCard className="custom-spotlight-card h-80 w-72 text-white flex flex-col">
            <img
              src="https://images.unsplash.com/photo-1738641928021-15dedad586da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <DialogContent className="bg-black h-1/2 w-">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
