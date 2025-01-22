import Window from "@/components/Terminal/Window";

const TerminalPart = () => {
  return (
    <div
      id="terminal"
      className="bg-slate-900 md:flex h-5/6 p-4 md:p-12 lg:p-24 hidden mt-16 pt-20 md:pt-24"
    >
      <Window />
    </div>
  );
};

export default TerminalPart;
