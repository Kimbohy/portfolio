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
  // Boolean to check if the input is focused
  const [focused, setFocused] = useState(false);

  // Function to change the value of focused
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const handleSubmit = (e: any) => {
    if (e.key === "Enter") {
      setCommand(words.join(" "));
      e.target.value = "";
      setWords([]);
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
      {words.map((word, index) => {
        return (
          <span
            key={index}
            className={commandsName.includes(word) ? keyword : "px-1"}
          >
            {word}
          </span>
        );
      })}
      <div className={active}></div>

      <input
        type="text"
        className="bg-transparent outline-none w-0 [word-spacing:0.5rem;] pl-1"
        onKeyDown={handleSubmit} // Use onKeyDown to capture "Enter" key presses
        onChange={(e) => {
          setWords(e.target.value.split(" "));
          addEventListener("keydown", (e) => {
            if (e.key === "ArrowUp") {
              e.preventDefault();
              if (lines.length > 0) {
                setWords(lines[lines.length - 1].command.split(" "));
                if (e.target) {
                  (e.target as HTMLInputElement).value = lines[lines.length - 1].command;
                }
              }
            } else if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
              e.preventDefault();
            }
          }
          );
        }} // Update the command on change
        onFocus={handleFocus} // Set focused to true when input is focused
        onBlur={handleBlur} // Set focused to false when input is blurred
      />
    </>
  );
};

export default HilightInput;
