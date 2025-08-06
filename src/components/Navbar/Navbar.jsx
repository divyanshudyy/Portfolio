import { useEffect, useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav
      className={`fixed z-100 bottom-5 left-1/2  transform -translate-x-2/4 w-[30%] backdrop-blur-md bg-white/10 border border-zinc-700 rounded-4xl py-4 flex justify-center items-center space-x-14 text-white transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-100"
      }`}
    >
      <a href="#about" className="hover:text-blue-400 transition">
        About
      </a>
      <a href="#skills" className="hover:text-blue-400 transition">
        Skills
      </a>
      <a href="#projects" className="hover:text-blue-400 transition">
        Projects
      </a>
      <a href="#contact" className="hover:text-blue-400 transition">
        Contact
      </a>
    </nav>
  );
}
