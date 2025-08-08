import MagicBento from "./MagicBento";
import BlurText from "../Hero/BlurText";

export default function Skills() {
  return (
    <section
      id="skills"
      className="h-screen w-full flex flex-col justify-center items-center px-4"
    >
      <BlurText
        text="Tech Stack & Specializations"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl mb-8 text-white
      font-bold"
      />
      <div className=" flex flex-col items-center justify-center ">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={200}
          particleCount={20}
          glowColor="132, 0, 255"
        />
      </div>
    </section>
  );
}
