import { Race } from "api/apiModels";
import { RacesState, RaceWithBet } from "./constants";

export const transformRacesToRacesState = (
    currentStateRaces: Record<string, RaceWithBet>,
    racesToTransform: Race[],
): Pick<RacesState, 'races' | 'order'> => racesToTransform.reduce(
    (acc: Pick<RacesState, 'races' | 'order'>, race) => ({
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
