import FadeContent from "./FadeContent";

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
      <div className="h-8/10 w-8/10 border-white opacity-15 border-1 border-solid rounded-2xl"></div>
    </section>
  );
}
