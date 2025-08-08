import BlurText from "../Hero/BlurText";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { about } from "@/lib/data";

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="h-screen w-full flex flex-col items-center justify-center"
    >
      <BlurText
        text={about.title}
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl mb-8 text-white font-bold"
      />

      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={-0.11}
        blurStrength={10}
        containerClassName="w-[80%] italic text-center mt-0 opacity-60 text-white"
      >
        {about.description}
      </ScrollReveal>

      <p className="text-xs italic text-center mt-4 opacity-60 text-white">
        {about.subtitle}
      </p>
    </motion.section>
  );
}
