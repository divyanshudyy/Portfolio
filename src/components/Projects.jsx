import AnimatedContent from "./AnimatedContent";

export default function Projects() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center font-extralight">
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={2}
        threshold={0.1}
      >
        <div className="text-white text-5xl font-bold">Selected Projects</div>
      </AnimatedContent>
    </section>
  );
}
