import { useEffect } from "react";

const Command = ({
  setCommand,
  click,
}: {
  setCommand: Function;
  click: boolean;
}) => {
  let command: string = "";

  const handleSubmit = (e: any) => {
    if (e.key === "Enter") {
      setCommand(command);
      e.target.value = "";
    }
  };
  useEffect(() => {
    document.querySelector("input")?.focus();
  }, [click]);

  return (
    <input
      type="text"
      className="bg-transparent outline-none w-full [word-spacing:0.5rem;] pl-1"
      onKeyDown={handleSubmit} // Use onKeyDown to capture "Enter" key presses
      onChange={(e) => (command = e.target.value)} // Update the command on change
    />
  );
};

export default Command;
