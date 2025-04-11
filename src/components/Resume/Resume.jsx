import TiltedCard from "./TiltedCard";
import BlurText from "../Hero/BlurText";

export default function Resume() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center gap-5">
      <BlurText
        text="Resume"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl mb-8 text-white font-bold"
      />
      <TiltedCard
        imageSrc="https://imgs.search.brave.com/zoL5cCSPT9PBpMUInODCbiCiCEEwMTPd-wv2FHkA8sE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXN1/bWVnZW5pdXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LXJlc3VtZS1idWls/ZGVyLXRlbXBsYXRl/LWJsYWNrLnBuZw"
        altText="Resume"
        captionText="Click To Download"
        containerHeight="500px"
        containerWidth="380px"
        imageHeight="500px"
        imageWidth="380px"
        rotateAmplitude={12}
        scaleOnHover={1.5}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={false}
        overlayContent={<p className="tilted-card-demo-text">Resume</p>}
      />
    </section>
  );
}
