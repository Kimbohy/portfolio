import json_command from "./command.json";
import data from "./finale.json";

// Helper function to check for --help or -h and return command description
const getHelpText = (cliCommand: string[]) => {
  if (cliCommand.includes("--help") || cliCommand.includes("-h")) {
    const commandHelp = json_command.commands.find(
      (command) => command.name === cliCommand[0]
    );
    return commandHelp
      ? `${commandHelp.name}: ${commandHelp.description}`
      : `No help available for ${cliCommand[0]}`;
  }
  return null;
};

// Decrypt the string data
const decryptCatData = (data: string) => {
  return data
    .split("")
    .map((char: string) => {
      // return String.fromCharCode(char.charCodeAt(0) - 1)
      if (/^[b-zB-Z]$/.test(char)) {
        return String.fromCharCode(char.charCodeAt(0) - 1);
      } else {
        return char;
      }
    })
    .join("");
};

export const useFunction = ({
  command,
  user,
}: {
  command: string;
  user: string;
}) => {
  command = command.trim();

  const splitCommand = (command: string) => {
    let words: string[] = [];
    words = command.split(" ");
    words = words.filter((word) => word !== "");
    return words;
  };

  const cli_command = splitCommand(command);

  // Check for --help or -h first
  const helpText = getHelpText(cli_command);
  if (helpText) {
    return helpText;
  }

  // Available sections for commands like 'ls'
  const sections = ["PageOne", "Terminal", "Work", "Contact"];

  switch (cli_command[0]) {
    case "sudo":
      return `sudo: the user ${user} is not in the sudoers group`;

    case "ls": {
      let response = "";
      if (cli_command[1]) {
        if (cli_command[1] === "-a") {
          response = [".", ".."].concat(sections).join(" ");
        } else if (cli_command[1] === "-l") {
          response =
            "total " +
            sections.length +
            "<br/>" +
            sections
              .map((section) => {
                return section !== "Contact"
                  ? `drwxr-xr-x 1 kim kim 798 Apr 10 22:30 ${" ".repeat(
                      10 - section.length
                    )} ${section}`
                  : `drwxr-xrwx 1 kim kim 534 Apr 10 22:30 ${" ".repeat(
                      10 - section.length
                    )} ${section}`;
              })
              .join("<br/>");
        } else if (cli_command[1] == ".") {
          response = sections.join(" ");
        } else {
          response = `ls: invalid option -- '${cli_command[1][1]}'`;
        }
      } else {
        response = sections.join(" ");
      }
      return response;
    }

    case "pwd":
      return "Terminal";

    case "whoami":
      return user;

    case "cat":
      const catData = data.data;
      const catFile = cli_command[1];
      if (!catFile) {
        return "cat: please specify a file to read";
      }
      const catDataFound = catData.find(
        (data) => decryptCatData(data.name) === catFile
      );
      return catDataFound
        ? decryptCatData(catDataFound.content)
        : `cat: ${catFile}: No such file or directory`;

    case "chmod": {
      const file = cli_command[2];
      if (
        !(
          (
            /^[0-7]{3}$/.test(cli_command[1]) || // Permissions in octal format
            /^[ugo]{1,3}[+-=][rwx]{1,3}$/.test(cli_command[1])
          ) // Symbolic notation
        )
      ) {
        return `chmod: invalid mode: '${cli_command[1]}'`;
      } else if (sections.includes(file)) {
        return `chmod: changing permissions of ${file}: Operation not permitted`;
      } else {
        return `chmod: cannot access ${file}: No such file or directory`;
      }
    }

    case "chown": {
      const file = cli_command[2];
      if (!/^[a-zA-Z0-9]+$/.test(cli_command[1])) {
        return `chown: invalid user: '${cli_command[1]}'`;
      } else if (sections.includes(file)) {
        return `chown: changing ownership of ${file}: Operation not permitted`;
      } else {
        return `chown: cannot access ${file}: No such file or directory`;
      }
    }

    case "chgrp": {
      const file = cli_command[2];
      if (!/^[a-zA-Z0-9]+$/.test(cli_command[1])) {
        return `chgrp: invalid group: '${cli_command[1]}'`;
      } else if (sections.includes(file)) {
        return `chgrp: changing ownership of ${file}: Operation not permitted`;
      } else {
        return `chgrp: cannot access ${file}: No such file or directory`;
      }
    }

    case "help":
      return (
        "Available commands: " +
        json_command.commands.map((command) => command.name).join(", ")
      );

    case "echo":
      return cli_command
        .slice(1)
        .join(" ")
        .replace("/", "&#47;")
        .replace("<", "&lt;")
        .replace(">", "&gt;");

    case "man": {
      const commandHelp = json_command.commands.find(
        (command) => command.name === cli_command[1]
      );
      return commandHelp
        ? `${commandHelp.name}: ${commandHelp.description}`
        : `man: no manual entry for ${cli_command[1]}`;
    }

    case "touch":
      if (cli_command[1]) {
        return `touch: cannot touch '${cli_command[1]}': Permission denied`;
      } else {
        return `touch: missing file operand`;
      }

    case "clear":
      return ""; // Clear the terminal

    default:
      return `Command not found: ${cli_command[0]}`;
  }
};
