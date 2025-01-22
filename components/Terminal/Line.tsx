'use client';

import { useEffect, useState } from "react";
import CommandDone from "./CommandDone";
import HilightInput from "./HilightInput";
import { useFunction } from "./Terminal";

interface LineType {
  user: string;
  cpName: string;
  privilege: string;
  command: string;
  response: string;
}

const Line = ({
  key,
  user,
  cpName,
  privilege,
  setLines,
  commandProps,
  click,
  response,
  lines,
}: {
  key: string;
  user: string;
  cpName: string;
  privilege: string;
  setLines: Function;
  commandProps: string;
  click: boolean;
  response?: string;
  lines: LineType[];
}) => {
  const [command, setCommand] = useState<string>("");

  const privilegeSign: string = privilege === "root" ? "#" : "$";

  const appendCommand = (newCommand: string) => {
    if (newCommand.trim().length > 0 && newCommand != "clear") {
      setLines((prev: any) => [
        ...prev,
        {
          user: user,
          cpName: cpName,
          privilege: privilege,
          command: newCommand,
          response: useFunction({ command: newCommand, user }),
        },
      ]);
    } else if (newCommand == "clear") {
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
    <div className={`text-xl text-mfotsy`}>
      <div className="text-mfotsy flex flex-wrap text-xl items-center">
        <span className="text-maitso">
          {user}@{cpName}
        </span>
        <span>:</span>
        <span>~</span>
        <span>{privilegeSign}</span>
        {commandProps === "" ? (
          <HilightInput
            setCommand={setCommand}
            click={click}
            lines={lines}
            key={key}
          />
        ) : (
          <CommandDone commandProps={commandProps} />
        )}
      </div>
      <p dangerouslySetInnerHTML={{ __html: response || "" }}></p>
    </div>
  );
};

export default Line;
