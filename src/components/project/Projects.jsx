import FadeContent from "./FadeContent";
import SpotlightCard from "./SpotlightCard";

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
        <SpotlightCard
          spotlightColor="rgba(0, 229, 255, 0.2)"
          className="custom-spotlight-card h-80 w-72 text-white flex flex-col m-10"
        >
          <h1>Project 1</h1>
          <p>iuabwbidandninaw sijdawwd</p>
        </SpotlightCard>
      </div>
    </section>
  );
}
