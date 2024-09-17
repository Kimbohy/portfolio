import { useState, useEffect } from "react";

export const useFunction = (code: string) => {
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    switch (code) {
      case "ls":
        setResult("PageOne, Terminal, Work, Contact");
        break;
      case "cat about":
        setResult(
          "I am a Full Stack Developer with a passion for learning and sharing my knowledge with others."
        );
        break;
      case "cat contact":
        setResult("Email: lovabarwijons@gmail.com");
        break;
      default:
        setResult("Command not found");
    }
  }, [code]);  // Trigger the effect whenever `code` changes

  return result;
};
