import PageTransition from "./components/Hero/PageTransition";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Projects from "./components/project/Projects";
import Blog from "./components/Blogs/Blog";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <main className="h-auto w-full bg-zinc-950 relative">
      {/* Page transition animation */}
      <PageTransition />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Resume />
      <Contact />
    </main>
  );
}
