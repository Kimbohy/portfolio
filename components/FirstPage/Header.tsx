"use client";
import { useState, useEffect } from "react";
import NavBut from "./NavBut";
import Glitch from "./glitchSvg/Glitch";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 to-the-top fixed top-0 left-0 right-0 transition-colors duration-300 ${
        isScrolled
          ? `bg-white/80 dark:bg-black/40 backdrop-blur-sm`
          : "bg-transparent"
      } ${isMenuOpen && "dark:bg-black/85"}`}
    >
      <div className="flex justify-between items-center w-full p-2 md:pr-8 md:pl-6">
        <div className="flex items-center">
          <Glitch />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex justify-end gap-8 lg:gap-16">
          <NavBut text="About" to="#about" D_lay={0.1} />
          <NavBut text="Work" to="#work" D_lay={0.3} />
          <NavBut text="Contact" to="#contact" D_lay={0.2} />
        </nav>

        {/* Mobile Menu */}
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
}

export default Header;
