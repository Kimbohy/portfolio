export const useFunction = (command: string): string => {
  // You can expand this logic to handle different commands
  switch (command.trim()) {
    case "help":
      return "Available commands: help, echo, clear";
    case "echo":
      return "Echoing... Please type something to echo.";
    case "clear":
      return ""; // You can implement clearing lines in the Body component if needed
    default:
      return `Command not found: ${command}`;
  }
};
