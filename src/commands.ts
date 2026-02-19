import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap, commandMapb } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

import type { CLICommand } from "./state.js";


export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Display locations",
      callback: commandMap,
    },
    mapb: {
      name: "map",
      description: "Go back to previous map locations",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description:"list pokemon in the area",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description:"attempt to catch a pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "view info about a caught pokemon",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "list pokemon in pokedex",
      callback: commandPokedex,
    }
  };
}