import { AxiosError } from "axios";
import ApplicationState from "store/ApplicationState";
import { initilParticipantsState } from "store/participants/constants";
import { initilRacesState } from "store/races/constants";

export const mockError: AxiosError = {
   config: {}, 
   isAxiosError: true, 
   toJSON: jest.fn(), 
   name: 'Mock error', 
   message: 'Mock error message',
};

export const mockApplicationState: ApplicationState = {
   participants: initilParticipantsState,
   races: initilRacesState,
};
