import Window from "./Terminal/Window";

const TerminalPart = () => {
  return (
    <div id="terminal" className="bg-slate-900 flex h-[90vh] p-4 md:p-12 lg:p-24">
      <Window />
    </div>
  );
};

export default TerminalPart;
