import { State } from "./state";

export async function commandCatch(state: State, ...args: string[]) {
    try {
        const pokemon = await state.api.fetchPokemon(args[0]);
        console.log(`Throwing a Pokeball at ${args[0]}...`);
        let chance = Math.random();
        chance = chance/(pokemon.base_experience / 100);
        if (chance > .2) {
            console.log(`${args[0]} was caught!`)
            state.pokedex[args[0]] = pokemon;
            console.log(`You may now inspect it with the inspect command`)
            return;
        } else {
            console.log(`${args[0]} escaped!`)
        }
    } catch (e) {
        console.log('invalid pokemon!');
    }
}