"use client";

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
  const processCommand = useFunction(); // Call the hook at component level
  const privilegeSign: string = privilege === "root" ? "#" : "$";

  useEffect(() => {
    if (command.length > 0) {
      if (command.trim() === "clear") {
        setLines([]);
      } else {
        const commandResponse = processCommand({ command, user }); // Use the returned function
        setLines((prev: LineType[]) => [
          ...prev,
          {
            user,
            cpName,
            privilege,
            command,
            response: commandResponse,
          },
        ]);
      }
      setCommand("");
    }
  }, [command, user, cpName, privilege, setLines, processCommand]);

  return (
    <div className="text-xl text-foreground">
      <div className="text-foreground flex flex-wrap text-xl items-center">
        <span className="text-terminal-green">
          {user}@{cpName}
        </span>
        <span>:</span>
        <span>~</span>
        <span>{privilegeSign}</span>
        {commandProps === "" ? (
          <HighlightInput setCommand={setCommand} click={click} lines={lines} />
        ) : (
          <CommandDone commandProps={commandProps} />
        )}
      </div>
      {response && <p dangerouslySetInnerHTML={{ __html: response }}></p>}
    </div>
  );
};

export default Line;
