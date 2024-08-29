import NavBut from "./NavBut";
import TextChangeOneHover from "./ui/text-change-oneHover";

function Header() {
  return (
    <header className="flex justify-between pr-12 pt-5 w-full z-20 pl-5">
      <TextChangeOneHover />
      <div className="flex justify-between w-max gap-16 text-2xl">
        <NavBut text={'Work'} D_lay={0.1} />
        <NavBut text={'About'} D_lay={0.3} />
        <NavBut text={'Contact'} D_lay={0.2} />
      </div>
    </header>
  );
}

export default Header;
