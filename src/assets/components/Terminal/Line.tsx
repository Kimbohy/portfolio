import { useEffect, useState } from "react";
import CommandDone from "./CommandDone";
import HilightInput from "./HilightInput";
import { useFunction } from "./Terminal";

const Line = ({
  user,
  cpName,
  privilage,
  setLines,
  commandProps,
  click,
  response,
}: {
  user: string;
  cpName: string;
  privilage: string;
  setLines: Function;
  commandProps: string;
  click: boolean;
  response?: string;
}) => {
  const [command, setCommand] = useState<string>("");
  let privilageSign: string = privilage == "root" ? "#" : "$";

  const appendCommand = (command: string, response: string) => {
    setLines((prev: any) => [
      ...prev,
      {
        user: user,
        cpName: cpName,
        privilage: privilage,
        command: command,
        response: response,
      },
    ]);
  };

  useEffect(() => {
    if (command.length > 0) {
      // const resp = useFunction(command);
      appendCommand(command, "command not found");
      setCommand("");
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
        {commandProps == "" ? (
          <HilightInput setCommand={setCommand} click={click} />
        ) : (
          <CommandDone commandProps={commandProps} />
        )}
      </div>
      <p>{response}</p>
    </div>
  );
};

export default Line;
