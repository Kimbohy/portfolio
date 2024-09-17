import clsx from "clsx";
import json_command from "../../command.json";

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

const CommandDone = ({ commandProps }: { commandProps: string }) => {
  const commandList:cliCommand = json_command;
  const commandsName: string[] = commandList.commands.map((command) => command.name);
  const words = commandProps.split(" ");
  const keyword: string = clsx("text-mavo", "px-1");
  return (
    <>
      {words.map((word, index) => {
        return (
          <span key={index} className={commandsName.includes(word) ? keyword : "px-1"}>
            {word}
          </span>
        );
      })}
    </>
  );
};

export default CommandDone;
