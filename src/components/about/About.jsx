import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <>
      <section className="h-screen w-full flex justify-center items-center">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={-10}
          blurStrength={20}
          containerClassName="max-w-[1200px] mx-auto px-1 opacity-75"
        >
          "Full-stack developer specializing in building impactful, scalable,
          and efficient digital solutions. With expertise across modern web
          technologies, I create future-ready applications that blend
          performance, security, and seamless user experience."
        </ScrollReveal>
      </section>
    </>
  );
}
