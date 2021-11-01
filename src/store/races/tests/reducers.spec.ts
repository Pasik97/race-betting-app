import * as M from './mockData';
import * as A from '../actions';
import { initilRacesState, Places, RaceActionType } from '../constants';
import racesReducer from '../reducers';
import * as H from '../helpers';
import { mockError } from 'utils/constant';

describe('racesReducer', () => {
   it(`should set isFetching value to true if received ${RaceActionType.GetRacesRequest} action type`, () => {
      expect(racesReducer(initilRacesState, A.getRacesRequest())).toEqual(
         { ...initilRacesState, isFetching: true },
      );
   });

   it(`should set isFetching value to true if received ${RaceActionType.GetRaceByIdRequest} action type`, () => {
      expect(racesReducer(initilRacesState, A.getRacesRequest())).toEqual(
         { ...initilRacesState, isFetching: true },
      );
   });

   it(`should call transformRacesToRacesState function if received ${RaceActionType.GetRacesSuccess} action type`, () => {
      const transformRacesToRacesStateSpy = jest.spyOn(H, 'transformRacesToRacesState');

      racesReducer(initilRacesState, A.getRacesSuccess(M.mockRaces));

      expect(transformRacesToRacesStateSpy).toHaveBeenCalled();

      transformRacesToRacesStateSpy.mockRestore();
   });

   it(`should set races and order fields value and set isFetching value to false if received ${RaceActionType.GetRacesSuccess} action type`, () => {
      expect(racesReducer({ ...initilRacesState, isFetching: true }, A.getRacesSuccess(M.newRaces))).toEqual(
         { ...initilRacesState, isFetching: false, races: M.newTransformedRaces.races, order: M.newTransformedRaces.order },
      );
   });

   it(`should call getUpdatedRacesAndOrder function if received ${RaceActionType.GetRaceByIdSuccess} action type`, () => {
      const getUpdatedRacesAndOrderSpy = jest.spyOn(H, 'getUpdatedRacesAndOrder');

      racesReducer(initilRacesState, A.getRaceByIdSuccess(M.mockRace));

      expect(getUpdatedRacesAndOrderSpy).toHaveBeenCalled();

      getUpdatedRacesAndOrderSpy.mockRestore();
   });

   it(`should set races and order fields value and set isFetching value to false if received ${RaceActionType.GetRaceByIdSuccess} action type`, () => {
      expect(racesReducer({ ...initilRacesState, isFetching: true }, A.getRaceByIdSuccess(M.mockRace))).toEqual(
         { ...initilRacesState, isFetching: false, races: M.mockTransformedRacesWithOneRace.races, order: M.mockTransformedRacesWithOneRace.order },
      );
   });

   it(`should call createBetWithUpdatedAmount function if received ${RaceActionType.SetRaceBetAmount} action type`, () => {
      const createBetWithUpdatedAmountSpy = jest.spyOn(H, 'createBetWithUpdatedAmount');

      racesReducer(initilRacesState, A.setRaceBetAmount(M.mockId, 1));

      expect(createBetWithUpdatedAmountSpy).toHaveBeenCalled();

      createBetWithUpdatedAmountSpy.mockRestore();
   });

   it(`should set race with updated bet field if received ${RaceActionType.SetRaceBetAmount} action type`, () => {
      expect(racesReducer(initilRacesState, A.setRaceBetAmount(M.mockId, 1))).toEqual(
         { ...initilRacesState, races: { [M.mockId]: { bet: { amount: 1 } } } },
      );
   });

   it(`should call createBetWithUpdatedPlace function if received ${RaceActionType.SetRaceBetPlace} action type`, () => {
      const createBetWithUpdatedPlaceSpy = jest.spyOn(H, 'createBetWithUpdatedPlace');

      racesReducer(initilRacesState, A.setRaceBetPlace(M.mockId, Places.First, 10));

      expect(createBetWithUpdatedPlaceSpy).toHaveBeenCalled();

      createBetWithUpdatedPlaceSpy.mockRestore();
   });

   it(`should set race with updated bet field if received ${RaceActionType.SetRaceBetPlace} action type`, () => {
      expect(racesReducer(initilRacesState, A.setRaceBetPlace(M.mockId, Places.First, 10))).toEqual(
         { ...initilRacesState, races: { [M.mockId]: { bet: { [Places.First]: 10 } } } },
      );
   });

   it(`should set isFetching value to false if received ${RaceActionType.GetRacesFail} action type`, () => {
      expect(racesReducer({ ...initilRacesState, isFetching: true }, A.getRacesFail(mockError))).toEqual(
         { ...initilRacesState, isFetching: false },
      );
   });

   it('should return current state if received action with unknown type', () => {
      expect(racesReducer(initilRacesState, {} as any)).toEqual(initilRacesState);
   });

   it('should return initial state if received undefined as state value', () => {
      expect(racesReducer(undefined, {} as any)).toEqual(initilRacesState);
   });
});
