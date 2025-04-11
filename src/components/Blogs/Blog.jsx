import ProjectCard from "../project/ProjectCard";
import BlurText from "../Hero/BlurText";

const image = [
  "https://images.unsplash.com/photo-1657638323016-b9b802f1756b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Blog() {
  return (
    <section className="h-auto w-full flex flex-col justify-center items-center py-10">
      <BlurText
        text="Selected Projects"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl mb-8 text-white font-bold"
      />

      <div
        className="h-auto w-[65rem] flex gap-8 flex-wrap justify-center items-center p-10 bg-zinc-900 rounded-2xl"
        style={{ padding: "1rem" }}
      >
        <ProjectCard imageUrl={image[0]} />
        <ProjectCard imageUrl={image[0]} />
        <ProjectCard imageUrl={image[0]} />
        <ProjectCard imageUrl={image[0]} />
        <ProjectCard imageUrl={image[0]} />
        <ProjectCard imageUrl={image[0]} />
      </div>
    </section>
  );
}
