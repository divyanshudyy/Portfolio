import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <>
      <section
        id="about"
        className="h-screen w-full flex justify-center items-center"
      >
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={-0.11}
          blurStrength={10}
          containerClassName="max-w-[1200px] mx-auto px-1 opacity-90 "
          
        >
          I’m a full-stack JavaScript developer with expertise in building
          end-to-end web architectures using React.js, Node.js, Express, and
          MongoDB. I specialize in designing RESTful APIs, implementing secure
          authentication systems with JWT, and deploying containerized
          microservices using Docker and Kubernetes. With experience in
          {/* real-time systems, database optimization, and cloud infrastructure, I
          focus on creating clean, scalable, and performance-driven solutions.
          As a national-level hackathon finalist (Top 25), I thrive in
          challenging environments and am passionate about engineering
          impactful, production-ready applications. */}
        </ScrollReveal>
      </section>
    </>
  );
}
