import { useState, useEffect } from "react";
import NavBut from "./NavBut";
import TextChangeOneHover from "../ui/text-change-oneHover";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 to-the-top fixed top-0 left-0 right-0 transition-colors duration-300 ${
        isMenuOpen
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-lg"
          : isScrolled
          ? "bg-white/80 dark:bg-black/40 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full p-4 md:pt-5 md:px-8">
        <div className="flex items-center">
          <TextChangeOneHover />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex justify-end gap-8 lg:gap-16">
          <NavBut text="Work" to="#work" D_lay={0.1} />
          <NavBut text="About" to="#about" D_lay={0.3} />
          <NavBut text="Contact" to="#contact" D_lay={0.2} />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2 text-second"
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="space-y-2"
          >
            <span
              className={`block w-8 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block w-8 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-8 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden fixed top-[72px] left-0 right-0 bg-white/95 dark:bg-black/85 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center gap-8 py-8">
              <NavBut text="Work" to="#work" D_lay={0.1} />
              <NavBut text="About" to="#about" D_lay={0.2} />
              <NavBut text="Contact" to="#contact" D_lay={0.3} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
