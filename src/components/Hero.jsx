import BlurText from "./BlurText";
import ShinyText from "./ShinyText";

export default function Hero() {
  return (
    <>
      <section className="h-screen w-full flex flex-col justify-center items-center font-extralight">
        <BlurText
          text="Transforming ideas into dynamic solutions"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-5xl text-white"
        />
        <br />

        <ShinyText
          text="Full-Stack Developer | MERN Stack Enthusiast"
          disabled={false}
          speed={2}
          className="custom-class text-2xl"
        />
      </section>
    </>
  );
}
