import * as M from './mockData';
import * as H from '../helpers';
import { initilRacesState, Places } from '../constants';

describe('transformRacesToRacesState', () => {
   it('should return object with old and new races', () => {
      expect(H.transformRacesToRacesState(M.transformedRaces, M.newRaces)).toEqual(M.newTransformedRaces);
   });
});

describe('getUpdatedRacesAndOrder', () => {
   it('should return object with old and new races and with old races order', () => {
      expect(H.getUpdatedRacesAndOrder(M.mockRacesState, M.secondMockRace)).toEqual(M.newTransformedRaces);
   });

   it('should return object with new races and new races order if received race does not exists in state', () => {
      expect(H.getUpdatedRacesAndOrder(initilRacesState, M.mockRace)).toEqual(M.mockTransformedRacesWithOneRace);
   });
});

describe('createBetWithUpdatedAmount', () => {
   it('should return object with updated amount value', () => {
      expect(H.createBetWithUpdatedAmount(M.mockBet, 1)).toEqual({ ...M.mockBet, amount: 1 });
   });

   it('should return object with only amount field if no bet was received', () => {
      expect(H.createBetWithUpdatedAmount(undefined, 1)).toEqual({ amount: 1 });
   });
});

describe('createBetWithUpdatedPlace', () => {
   it('should return object with updated value of place equal to place received as an argument', () => {
      expect(H.createBetWithUpdatedPlace(M.mockBet, Places.Second, 10)).toEqual({ ...M.mockBet, [Places.Second]: 10 });
   });

   it('should return object with clear place where id is equal to id to set', () => {
      expect(H.createBetWithUpdatedPlace(M.mockBet, Places.Second, 1)).toEqual({ ...M.mockBet, [Places.Second]: 1, first: undefined });
   });

   it('should return object with only place setted if no bet was received', () => {
      expect(H.createBetWithUpdatedPlace(undefined, Places.Second, 1)).toEqual({ [Places.Second]: 1 });
   });
});
