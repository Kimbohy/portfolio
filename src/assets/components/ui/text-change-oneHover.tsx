import { useState, useEffect } from "react";

export default function TextChangeOneHover() {
  const [isHovering, setIsHovering] = useState(false);
  const text = ["RABARIJAONA", "Lovatiana"];

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const element = document.querySelector(".hoveElement");
    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup event listeners on component unmount
      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="hoveElement text-second text-4xl flex cursor-default gap-2">
      <span className="text2">{text[1]}</span>
      <div
        className={`text1 overflow-hidden ${isHovering ? "w-full" : "w-0"}`}
        style={{ transition: "width 1s" }}
      >
        <span className="text-nowrap">{text[0]}</span>
      </div>
    </div>
  );
}
