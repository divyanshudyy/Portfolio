import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Projects from "./components/project/Projects";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "@/components/ui/Toast";
import Silk from "./components/Hero/Silk";
// import Blog from "./components/Blogs/Blog";

export default function App() {
  return (
    <main className="h-auto w-full relative">
      <Toaster />
      <div className="fixed inset-0 -z-10 backdrop-blur-4xl">
        <Silk
          speed={3}
          scale={1}
          color="#242424"
          noiseIntensity={0}
          rotation={0}
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-transparent"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Blog /> */}
      <Resume />
      <Contact />
    </main>
  );
}
