import { Race } from "api/apiModels";
import { mockApplicationState } from "utils/constant";
import { Bet, initilRacesState, RacesState, RaceWithBet } from "../constants";
import ApplicationState from "store/ApplicationState";

export const mockId = '1';

export const mockRace: RaceWithBet = {
   id: 1,
   name: 'mock race',
   active: true,
   participants: [1],
   bet: {
      amount: 12,
   },
}

export const mockRaces: Race[] = [mockRace];

export const transformedRaces: Record<string, RaceWithBet> = {
   [mockRace.id]: mockRace,
}

export const secondMockRace: Race = {
   id: 2,
   name: 'second mock race',
   active: false,
   participants: [],
}

export const newRaces: Race[] = [mockRace, secondMockRace];

export const newTransformedRaces: Pick<RacesState, 'races' | 'order'> = {
   races: {
      [mockRace.id]: mockRace,
      [secondMockRace.id]: secondMockRace,
   },
   order: [mockRace.id, secondMockRace.id],
}

export const mockBet: Bet = {
   amount: 12,
   first: 1,
   second: 2,
   third: 3,
}

export const mockRacesState: RacesState = {
   ...initilRacesState,
   races: {
      [mockRace.id]: mockRace,
      [secondMockRace.id]: secondMockRace,
   },
   order: [mockRace.id, secondMockRace.id],
};

export const mockTransformedRacesWithOneRace: Pick<RacesState, 'races' | 'order'> = {
   races: {
      [mockRace.id]: mockRace,
   },
   order: [mockRace.id],
};

export const mockApplicationStateWithRaces: ApplicationState = {
   ...mockApplicationState,
   races: {
      ...mockRacesState,
   },
};
