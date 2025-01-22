'use client';

import { useEffect, useState } from "react";
import CommandDone from "./CommandDone";
import { useFunction } from "./Terminal";
import HighlightInput from "./HighlightInput";

interface LineType {
  user: string;
  cpName: string;
  privilege: string;
  command: string;
  response: string;
}

interface LineProps {
  user: string;
  cpName: string;
  privilege: string;
  setLines: React.Dispatch<React.SetStateAction<LineType[]>>;
  commandProps: string;
  click: boolean;
  response?: string;
  lines: LineType[];
}

const Line = ({
  user,
  cpName,
  privilege,
  setLines,
  commandProps,
  click,
  response,
  lines,
}: LineProps) => {
  const [command, setCommand] = useState<string>("");

  const privilegeSign: string = privilege === "root" ? "#" : "$";

  const appendCommand = (newCommand: string) => {
    if (newCommand.trim().length > 0 && newCommand !== "clear") {
      setLines((prev: LineType[]) => [
        ...prev,
        {
          user: user,
          cpName: cpName,
          privilege: privilege,
          command: newCommand,
          response: useFunction({ command: newCommand, user }),
        },
      ]);
    } else if (newCommand === "clear") {
      setLines([]);
    }
  };

  useEffect(() => {
    if (command.length > 0) {
      appendCommand(command);
      setCommand(""); // Reset command after submission
    }
  }, [command]);

  return (
    <div className="text-xl text-mfotsy">
      <div className="text-mfotsy flex flex-wrap text-xl items-center">
        <span className="text-maitso">
          {user}@{cpName}
        </span>
        <span>:</span>
        <span>~</span>
        <span>{privilegeSign}</span>
        {commandProps === "" ? (
          <HighlightInput
            setCommand={setCommand}
            click={click}
            lines={lines}
          />
        ) : (
          <CommandDone commandProps={commandProps} />
        )}
      </div>
      {response && <p dangerouslySetInnerHTML={{ __html: response }}></p>}
    </div>
  );
};

export default Line;
