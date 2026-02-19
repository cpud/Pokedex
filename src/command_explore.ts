import { State } from "./state";

export async function commandExplore(state: State, ...args:string[]): Promise<void> {
    try {
        const data = await state.api.fetchLocation(args[0]);
        console.log(`Exploring ${args[0]}...`);
        console.log("Found Pokemon:");
        for (const pokemon of data.pokemon_encounters) {
            console.log(` - ${pokemon.pokemon.name}`);
        }

    } catch (e) {
        console.log(`${(e as Error).message}`);
    }
}