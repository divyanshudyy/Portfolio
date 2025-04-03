import ScrollFloat from "./ScrollFloat";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="h-auto w-full flex flex-col justify-center items-center">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        PROJECTS
      </ScrollFloat>
      <div
        className="h-auto w-4/5 flex gap-8 flex-wrap justify-center items-center p-10 bg-zinc-900 rounded-2xl"
        style={{ padding: "1rem" }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
