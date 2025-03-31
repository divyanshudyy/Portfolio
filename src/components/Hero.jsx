import BlurText from "./BlurText";
import TrueFocus from "./TrueFocus";
import ShinyText from "./ShinyText";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <>
      <section className="h-screen w-full flex flex-col justify-center items-center">
        <BlurText
          text="Transforming ideas into dynamic solutions"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-5xl text-white"
        />
        <br />

        <ShinyText
          text="Full-Stack Web Developer | MERN Stack Enthusiast"
          disabled={false}
          speed={3}
          className="custom-class text-2xl"
        />
      </section>

      <section className="h-screen w-full flex justify-center items-center">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={10}
          blurStrength={20}
          containerClassName="max-w-[1200px] mx-auto px-6 text-center opacity-75"
        >
          " I am a full-stack developer specializing in building impactful,
          scalable, and efficient digital solutions. With expertise across
          modern web technologies, I create future-ready applications that blend
          performance, security, and seamless user experience . "
        </ScrollReveal>
      </section>
    </>
  );
}
