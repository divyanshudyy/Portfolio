import TrueFocus from "./TrueFocus";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center">
      <BlurText
        text="Code That Connects Both Ends"
        delay={200}
        animateBy="words"
        direction="top"
        className="text-5xl text-white"
      />
      <TrueFocus
        sentence="Divyanshu Developer"
        manualMode={false}
        blurAmount={5}
        borderColor="blue"
        animationDuration={1}
        pauseBetweenAnimations={1}
      />
    </section>
  );
}
