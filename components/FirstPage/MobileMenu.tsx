import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import NavBut from "./NavBut";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden p-2 text-secondary"
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
    </>
  );
}

export default MobileMenu;
