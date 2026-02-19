import { State } from "./state";

export async function commandExit(state:State): Promise<void> {
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
}