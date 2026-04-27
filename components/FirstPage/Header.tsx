"use client";
import { useState, useEffect } from "react";
import NavBut from "./NavBut";
import Glitch from "./glitchSvg/Glitch";
import MobileMenu from "./MobileMenu";
import ModeToggle from "@/components/ModeToggle";
import { useMode } from "@/context/PortfolioMode";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mode } = useMode();

  const links =
    mode === "ml"
      ? {
          about: "#about-ml",
          work: "#work-ml",
          contact: "#contact-ml",
        }
      : {
          about: "#about",
          work: "#work",
          contact: "#contact",
        };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        <nav className="hidden sm:flex justify-end gap-6 lg:gap-10 h-12 items-center">
          <NavBut text="About" to={links.about} D_lay={0.1} />
          <NavBut text="Work" to={links.work} D_lay={0.3} />
          <NavBut text="Contact" to={links.contact} D_lay={0.2} />
          <ModeToggle />
        </nav>

        {/* Mobile Menu */}
        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          links={links}
        />
      </div>
    </header>
  );
}

export default Header;
