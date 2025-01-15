import logo from "/kim.svg";

export default function Glitch() {
  return (
    <div className="flex items-center">
      <div className="relative w-[80px]">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
    </div>
  );
}
