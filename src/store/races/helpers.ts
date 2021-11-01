import { Race } from "api/apiModels";
import { RacesState } from "./constants";

export const transformRacesToRacesState = (racesToTransform: Race[]): Pick<RacesState, 'races' | 'order'> => racesToTransform.reduce(
    (acc: Pick<RacesState, 'races' | 'order'>, race) => ({
        races: { ...acc.races, [race.id]: race },
        order: [...acc.order, race.id],
    }),
    { races: {}, order: [] },
);
