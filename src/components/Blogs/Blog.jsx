import ProjectCard from "../project/ProjectCard";
import ScrollFloat from "../project/ScrollFloat";

export default function Blog() {
  return (
    <section className="h-auto w-full flex flex-col justify-center items-center">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Blogs & Case Studies
      </ScrollFloat>
      <div
        className="h-auto w-auto flex gap-8 flex-wrap justify-center items-center p-10 bg-zinc-900 rounded-2xl"
        style={{ padding: "1rem" }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
