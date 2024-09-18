import { useEffect, useState } from "react";
import json_command from "./command.json";
import clsx from "clsx";

interface cliCommand {
  commands: {
    id: number;
    name: string;
    description: string;
    options: {
      name: string;
      description: string;
    }[];
  }[];
}

interface LineType {
  user: string;
  cpName: string;
  privilage: string;
  command: string;
  response: string;
}

const HilightInput = ({
  setCommand,
  click,
  lines,
}: {
  setCommand: Function;
  click: boolean;
  lines: LineType[];
}) => {
  const [words, setWords] = useState<string[]>([]);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const handleSubmit = (e: any) => {
    if (e.key === "Enter") {
      setCommand(words.join(" "));
      e.target.value = "";
      setWords([]);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (lines.length > 0 && e.target) {
        (e.target as HTMLInputElement).value = lines[lines.length - 1].command;
        setWords(lines[lines.length - 1].command.split(" "));
      }
    } else if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault(); // Prevent default cursor movements
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (words.length === 1) {
        const filteredCommands = commandsName.filter((command) =>
          command.startsWith(words[0])
        );
        if (filteredCommands.length === 1) {
          if (e.target) {
            (e.target as HTMLInputElement).value = filteredCommands[0];
            setWords([filteredCommands[0]]);
          }
        }
      }
    }
  };

  useEffect(() => {
    document.querySelector("input")?.focus();
  }, [click]);

  const commandList: cliCommand = json_command;
  const commandsName: string[] = commandList.commands.map(
    (command) => command.name
  );
  const keyword: string = clsx("text-mavo", "px-1");

  const active = clsx(
    "w-2",
    "h-5",
    "inline-block",
    focused ? ["animate-custom-pulse", "bg-mfotsy"] : ["border-2"]
  );

  return (
    <>
      {words.map((word, index) => (
        <span
          key={index}
          className={commandsName.includes(word) ? keyword : "px-1"}
        >
          {word}
        </span>
      ))}
      <div className={active}></div>

      <input
        type="text"
        className="bg-transparent outline-none w-0 [word-spacing:0.5rem;] pl-1"
        onKeyDown={handleKeyDown} // Handle key actions such as ArrowUp, ArrowLeft, Tab, etc.
        onKeyPress={handleSubmit} // Handle the Enter key
        onChange={(e) => setWords(e.target.value.split(" "))} // Update the words state on change
        onFocus={handleFocus} // Set focused to true when input is focused
        onBlur={handleBlur} // Set focused to false when input is blurred
      />
    </>
  );
};

export default HilightInput;
