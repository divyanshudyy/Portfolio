import PageTransition from "./components/Hero/PageTransition";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Projects from "./components/project/Projects";
import Blog from "./components/Blogs/Blog";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Galaxy from "./components/Hero/Galaxy";
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "@/components/ui/Toast";
import Silk from "./components/Hero/Silk";

export default function App() {
  return (
    <main className="h-auto w-full relative">
      <Toaster />
      <div className="fixed inset-0 -z-10 backdrop-blur-4xl">
        {/* <Galaxy /> */}
        <Silk
          speed={3}
          scale={1}
          color="#160D3B"
          noiseIntensity={0}
          rotation={0}
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-transparent"></div>
      </div>
      <Navbar />
      <PageTransition />
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
