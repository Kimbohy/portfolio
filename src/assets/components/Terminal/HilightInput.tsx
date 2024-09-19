import { useEffect, useState, useRef } from "react";
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
  key,
}: {
  setCommand: Function;
  click: boolean;
  lines: LineType[];
  key: number;
}) => {
  const [words, setWords] = useState<string[]>([]);
  const [focused, setFocused] = useState(false);

  // Create a ref to directly access the input element
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const handleSubmit = (e: any) => {
    if (e.key === "Enter") {
      setCommand(words.join(" "));
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      setWords([]);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (lines.length > 0 && inputRef.current) {
        inputRef.current.value = lines[lines.length - 1].command;
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
          if (inputRef.current) {
            inputRef.current.value = filteredCommands[0];
            setWords([filteredCommands[0]]);
          }
        }
      }
    }
  };

  // Focus the input element only when `click` changes and not whene the component is loaded
  useEffect(() => {
    if (click && inputRef.current) {
      inputRef.current.focus();
    }
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
        ref={inputRef} // Use ref instead of document.querySelector
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
