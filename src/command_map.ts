import { State } from "./state";

export async function commandMap(state: State): Promise<void> {
    try {
        const response = await state.api.fetchLocations(state.nextLocationsURL);
        if (!response) {
            throw new Error(`${response}`)
        }
        state.nextLocationsURL = response.next;
        state.previousLocationsURL = response.previous;
        for (const result of response.results) {
            console.log(result.name);
        }
    } catch (e) {
        throw new Error(`Error fetching locations: ${(e as Error).message}`);
    }


}

export async function commandMapb(state: State) {
    if (!state.previousLocationsURL) {
        console.log("you're on the first page!")
        return;
    }
    try {
        const response = await state.api.fetchLocations(state.previousLocationsURL);
        if (!response) {
            throw new Error(`${response}`)
        }
        state.nextLocationsURL = response.next;
        state.previousLocationsURL = response.previous;
        for (const result of response.results) {
            console.log(result.name);
        }
    } catch (e) {
        throw new Error(`Error fetching locations: ${(e as Error).message}`);
    }


}