import FadeContent from "./FadeContent";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="text-white text-6xl"
      >
        Selected Projects
      </FadeContent>
      <div
        className="h-auto w-4/5 border-gray-800 border border-solid rounded-2xl flex gap-10 flex-wrap justify-center items-center p-10"
        style={{ padding: "2rem" }}
      >
        <ProjectCard />
      </div>
    </section>
  );
}
