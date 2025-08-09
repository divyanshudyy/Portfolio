import { useEffect, useState } from "react";
import Dock from "./Dock";
import { nav } from "@/lib/data";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav>
      <Dock
        className={`transition-all duration-1000 ease-out ${
          isVisible
            ? "transform translate-y-0 opacity-100"
            : "transform translate-y-40 opacity-0"
        }`}
        items={nav}
        panelHeight={58}
        baseItemSize={50}
        magnification={90}
      />
    </nav>
  );
}
