import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import NavBut from "./NavBut";
import ModeToggle from "@/components/FirstPage/ModeToggle";

function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
  links,
}: {
  isMenuOpen?: boolean;
  setIsMenuOpen: (open: boolean) => void;
  links: {
    work: string;
    about: string;
    contact: string;
  };
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        ref={buttonRef}
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
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden fixed top-[66.4px] left-0 right-0 bg-white/95 dark:bg-black/85 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center gap-8 py-8">
              <ModeToggle />
              <NavBut
                text="Work"
                to={links.work}
                D_lay={0.1}
                onClick={() => setIsMenuOpen(false)}
              />
              <NavBut
                text="About"
                to={links.about}
                D_lay={0.2}
                onClick={() => setIsMenuOpen(false)}
              />
              <NavBut
                text="Contact"
                to={links.contact}
                D_lay={0.3}
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileMenu;
