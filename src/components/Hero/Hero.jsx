import BlurText from "./BlurText";
import ShinyText from "./ShinyText";
import Galaxy from "./Galaxy";

export default function Hero() {
  return (
    <>
      <section className="h-screen w-full flex flex-col justify-center items-center font-extralight relative">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Galaxy
            mouseRepulsion={false}
            mouseInteraction={false}
            density={.3}
            glowIntensity={0.1}
            saturation={0.1}
            hueShift={240}
          />
        </div>
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
            speed={2}
            className="text-2xl text-white"
          />
        </div>
      </section>
    </>
  );
}
