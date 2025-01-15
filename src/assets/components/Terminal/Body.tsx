import { useState } from "react";
import Line from "./Line";
import { BackgroundGradient } from "../ui/background-gradient";

interface LineType {
  user: string;
  cpName: string;
  privilege: string;
  command: string;
  response: string;
}

const Body = () => {
  const [lines, setLines] = useState<LineType[]>([]);
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div onClick={handleClick}>
      <BackgroundGradient className="bg-zinc-900 h-[60vh] flex flex-col px-1 md:px-2 rounded-2xl overflow-scroll terminal-body">
        <span className="text-mfotsy flex flex-wrap text-xl items-center mt-2">
          use 'help' to get all available command
        </span>
        {lines.map((line, index) => (
          <Line
            key={index}
            user={line.user}
            cpName={line.cpName}
            privilege={line.privilege}
            setLines={setLines}
            commandProps={line.command}
            response={line.response}
            click={click}
            lines={lines}
          />
        ))}
        <Line
          key={lines.length}
          user="gest"
          cpName="thisPC"
          privilege="privilege"
          setLines={setLines}
          commandProps="" // This allows input in the last line
          click={click}
          lines={lines}
        />
      </BackgroundGradient>
    </div>
  );
};

export default Body;
