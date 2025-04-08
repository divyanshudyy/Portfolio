import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Projects from "./components/project/Projects";
import Blog from "./components/Blogs/Blog";
import Skills from "./components/Skills/Skills";

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
    </>
  );
}
