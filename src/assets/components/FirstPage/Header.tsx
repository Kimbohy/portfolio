import NavBut from "./NavBut";
import TextChangeOneHover from "../ui/text-change-oneHover";

function Header() {
  return (
    <header className="z-20 flex justify-between w-full pt-5 pl-5 pr-12">
      <div className="flex items-center gap-3">
        <TextChangeOneHover />
      </div>
      <div className="flex justify-between gap-16 text-2xl w-max">
        <NavBut text={"Work"} D_lay={0.1} />
        <NavBut text={"About"} D_lay={0.3} />
        <NavBut text={"Contact"} D_lay={0.2} />
      </div>
    </header>
  );
}

export default Header;
