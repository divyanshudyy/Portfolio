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

export default function App() {
  return (
    <main className="h-auto w-full relative">
      <Toaster />
      <div className="fixed inset-0 -z-10">
        <Galaxy
        // mouseRepulsion={false}
        // mouseInteraction={false}
        // density={0.1}
        // glowIntensity={0.1}
        // saturation={0.5}
        // hueShift={100}
        />
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
