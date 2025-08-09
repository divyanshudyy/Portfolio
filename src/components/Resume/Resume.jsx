import TiltedCard from "./TiltedCard";
import BlurText from "../Hero/BlurText";

export default function Resume() {
  return (
    <section
      id="resume"
      className="h-screen w-full flex flex-col justify-center items-center gap-5"
    >
      <BlurText
        text="Experience & Credentials"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl mb-8 text-white font-bold"
      />
      <a
        href="/2025-resume-builder-template-black.webp"
        download="/2025-resume-builder-template-black.webp"
      >
        <TiltedCard
          imageSrc="/2025-resume-builder-template-black.webp"
          altText="Resume"
          captionText="Click To Download"
          containerHeight="500px"
          containerWidth="380px"
          imageHeight="500px"
          imageWidth="380px"
          rotateAmplitude={12}
          scaleOnHover={1.3}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={false}
          overlayContent={<p className="tilted-card-demo-text">Resume</p>}
        />
      </a>
    </section>
  );
}
