import { createStore } from "redux";
import { Location } from 'history';
import { ParticipantsState } from "store/participants/constants";
import { RacesState } from "store/races/constants";
import reducers from "store/reducers";
import { SingleRacePageProps } from "../constants";

export const createMockRaceStore = (racesState: RacesState, participantsState?: ParticipantsState) => createStore(
   reducers, { races: racesState, participants: participantsState },
);

const mockLocation: Location = {
   pathname: '', search: '', state: {}, hash: '',
}

export const mockSingleRacePageProps: SingleRacePageProps = {
   history: {
      length: 0,
      action: 'POP',
      location: mockLocation,
      push: jest.fn(),
      replace: jest.fn(),
      go: jest.fn(),
      goBack: jest.fn(),
      goForward: jest.fn(),
      block: jest.fn(),
      listen: jest.fn(),
      createHref: jest.fn(),
   },
   location: mockLocation,
   match: {
      params: { id: '1' },
      isExact: false, 
      path: '', 
      url: '',
   },
}
