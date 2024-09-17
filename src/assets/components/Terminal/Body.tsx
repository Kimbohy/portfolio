import { useState } from "react";
import Line from "./Line";
import { BackgroundGradient } from "../ui/background-gradient";

interface LineType {
  user: string;
  cpName: string;
  privilage: string;
  command: string;
  response: string;
}

const Body = () => {
  const [lines, setLines] = useState<LineType[]>([]);
  const [click, setClick] = useState<boolean>(false);
  const handelClick = () => {
    setClick(!click);
  };
  return (
    <div onClick={handelClick}>
      <BackgroundGradient className="bg-zinc-900 h-[40vh] flex flex-col px-2 rounded-2xl">
        {lines.map((line, index) => {
          return (
            <Line
              key={index}
              user={line.user}
              cpName={line.cpName}
              privilage={line.privilage}
              setLines={setLines}
              commandProps={line.command}
              response={line.response}
              click={click}
            />
          );
        })}
        <Line
          user="user"
          cpName="cpName"
          privilage="privilage"
          setLines={setLines}
          commandProps=""
          click={click}
        />
      </BackgroundGradient>
    </div>
  );
};

export default Body;
