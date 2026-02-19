import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
import { Cache } from "./pokecache.js";
import { Pokemon } from "./pokeapi.js";


export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    api: PokeAPI;
    nextLocationsURL: string;
    previousLocationsURL: string;
    pokedex: Record<string, Pokemon>
};

export function initState(cacheInterval: number) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const api = new PokeAPI(cacheInterval);
    //const cache = new Cache;
    //const response = await api.fetchLocations();
    

    return {
        readline: rl,
        commands: getCommands(),
        api: api,
        nextLocationsURL: "",
        previousLocationsURL: "",
        pokedex: {}
    }
}