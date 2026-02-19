import { startREPL } from "./repl.js";
import { initState } from "./state.js";
import { PokeAPI } from "./pokeapi.js";
import { Cache } from "./pokecache.js";

async function main() {
    const state = initState(1000 * 60 * 4); // 4 minutes
    await startREPL(state);
}

//const thing = new PokeAPI;
//thing.fetchLocations("");

main();