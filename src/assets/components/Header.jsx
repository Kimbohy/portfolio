import TextChangeOneHover from "./ui/text-change-oneHover";


function Header() {
  return (
    <header className="flex justify-between pr-12 pt-5 w-full z-20 pl-5">
      <TextChangeOneHover />
        <div className="flex justify-between w-max gap-16 text-2xl text-white">
            <span>Work</span>
            <span>About</span>
            <span>Contact</span>
        </div>
    </header>
  );
}

export default Header;