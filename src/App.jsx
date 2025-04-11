import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Projects from "./components/project/Projects";
import Blog from "./components/Blogs/Blog";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <main className="h-auto w-9/10 mx-auto bg-zinc-950 ">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Blog />
      <Contact/>
    </main>
  );
}
