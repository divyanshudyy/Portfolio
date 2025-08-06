import BlurText from "./BlurText";
import ShinyText from "./ShinyText";

export default function Hero() {
  return (
    <>
      <section className="h-screen w-full flex flex-col justify-center items-center font-extralight relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center flex flex-col items-center">
          <BlurText
            text="Transforming ideas into dynamic solutions"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-5xl text-white w-screen flex justify-center"
          />
          <br />
          <ShinyText
            text="Full-Stack Developer | MERN Stack Enthusiast"
            disabled={false}
            speed={3}
            className="text-2xl text-white"
          />
        </div>
      </section>
    </>
  );
}
