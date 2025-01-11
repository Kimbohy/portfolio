import NavBut from "./NavBut";
import TextChangeOneHover from "../ui/text-change-oneHover";

function Header() {
  return (
    <header className="z-20 flex flex-col sm:flex-row justify-between w-full 
      p-3 sm:p-4 md:pt-5 md:pl-5 md:pr-12 gap-4 sm:gap-0">
      <div className="flex items-center gap-3">
        <TextChangeOneHover />
      </div>
      <nav className="flex justify-between sm:justify-end 
        gap-4 sm:gap-6 md:gap-8 lg:gap-16 w-full sm:w-max">
        <NavBut text={"Work"} to="#work" D_lay={0.1} />
        <NavBut text={"About"} to="#about" D_lay={0.3} />
        <NavBut text={"Contact"} to="#contact" D_lay={0.2} />
      </nav>
    </header>
  );
}

export default Header;
