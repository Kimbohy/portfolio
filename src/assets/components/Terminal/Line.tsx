import { useEffect, useState } from "react";
import CommandDone from "./CommandDone";
import HilightInput from "./HilightInput";
import { useFunction } from "./Terminal"; 

interface LineType {
  user: string;
  cpName: string;
  privilage: string;
  command: string;
  response: string;
}


const Line = ({
  user,
  cpName,
  privilage,
  setLines,
  commandProps,
  click,
  response,
  lines,
}: {
  user: string;
  cpName: string;
  privilage: string;
  setLines: Function;
  commandProps: string;
  click: boolean;
  response?: string;
  lines: LineType[];
}) => {
  const [command, setCommand] = useState<string>("");

  let privilageSign: string = privilage === "root" ? "#" : "$";

  const appendCommand = (newCommand: string) => {
    if (newCommand.trim().length > 0) {
      setLines((prev: any) => [
        ...prev,
        {
          user: user,
          cpName: cpName,
          privilage: privilage,
          command: newCommand,
          response: useFunction({ command: newCommand, user }),
        },
      ]);
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
        <span>{privilageSign}</span>
        {commandProps === "" ? (
          <HilightInput setCommand={setCommand} click={click} lines={lines} />
        ) : (
          <CommandDone commandProps={commandProps} />
        )}
      </div>
      <p dangerouslySetInnerHTML={{ __html: response || "" }}></p>
    </div>
  );
};

export default Line;
