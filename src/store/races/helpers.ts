import { Race } from "api/apiModels";
import * as C from "./constants";

export const transformRacesToRacesState = (
    currentStateRaces: Record<string, C.RaceWithBet>,
    racesToTransform: Race[],
): Pick<C.RacesState, 'races' | 'order'> => racesToTransform.reduce(
    (acc: Pick<C.RacesState, 'races' | 'order'>, race) => ({
        order: [...acc.order, race.id],
        races: {
            ...acc.races,
            [race.id]: {
                ...(acc.races[race.id] ? acc.races[race.id] : {}),
                ...race
            },
        },
    }),
    { races: { ...currentStateRaces }, order: [] },
);

export const getUpdatedRacesAndOrder = (currentState: C.RacesState, newRace: Race): Pick<C.RacesState, 'races' | 'order'> => {
    const order = currentState.races[newRace.id]
        ? currentState.order
        : [...currentState.order, newRace.id];

    const races: Record<string, C.RaceWithBet> = currentState.races[newRace.id]
        ? {
            ...currentState.races,
            [newRace.id]: {
                ...currentState.races[newRace.id],
                ...newRace,
            },
        }
        : { ...currentState.races, [newRace.id]: newRace };

    return { order, races };
}

export const createBetWithUpdatedAmount = (currentRaceBet: C.Bet | undefined, amount: number): C.Bet => currentRaceBet
    ? { ...currentRaceBet, amount }
    : { amount };

export const createBetWithUpdatedPlace = (
    currentRaceBet: C.Bet | undefined,
    placeToSet: C.Places,
    participantId: number,
) => {
    const newBet: C.Bet = currentRaceBet ? { ...currentRaceBet } : {};

    Object.values(C.Places).forEach((place) => {
        if (newBet[place] === participantId) {
            newBet[place] = undefined;
        }
    });

    newBet[placeToSet] = participantId;

    return newBet;
};
