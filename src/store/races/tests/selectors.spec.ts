import * as M from './mockData';
import * as S from '../selectors';

describe('getIsFetchingRaces', () => {
   it('should return isFetching field value', () => {
      expect(S.getIsFetchingRaces(M.mockApplicationStateWithRaces)).toEqual(M.mockApplicationStateWithRaces.races.isFetching);
   });
});

describe('getRaces', () => {
   it('should return races field value', () => {
      expect(S.getRaces(M.mockApplicationStateWithRaces)).toEqual(M.mockApplicationStateWithRaces.races.races);
   });
});

describe('getRacesOrder', () => {
   it('should return order field value', () => {
      expect(S.getRacesOrder(M.mockApplicationStateWithRaces)).toEqual(M.mockApplicationStateWithRaces.races.order);
   });
});

describe('getRaceById', () => {
   it('should return race with id equal to received id', () => {
      expect(S.getRaceById(M.mockApplicationStateWithRaces, M.mockId)).toEqual(M.mockRace);
   });
});

describe('getRaceActiveStatusById', () => {
   it('should return race with id equal to received id active status', () => {
      expect(S.getRaceActiveStatusById(M.mockApplicationStateWithRaces, M.mockId)).toEqual(M.mockRace.active);
   });

   it('should return false if race with id equal to received id does not exist', () => {
      expect(S.getRaceActiveStatusById(M.mockApplicationStateWithRaces, '999')).toEqual(false);
   });
});

describe('getRaceBetById', () => {
   it('should return race with id equal to received id bet field value', () => {
      expect(S.getRaceBetById(M.mockApplicationStateWithRaces, M.mockId)).toEqual(M.mockRace.bet);
   });

   it('should return undefined if race with id equal to received id does not exist', () => {
      expect(S.getRaceBetById(M.mockApplicationStateWithRaces, '999')).toBeUndefined();
   });
});

describe('getRaceBetAmountById', () => {
   it('should return race with id equal to received id bet amount field value', () => {
      expect(S.getRaceBetAmountById(M.mockApplicationStateWithRaces, M.mockId)).toEqual(M.mockRace.bet?.amount);
   });

   it('should return undefined if race with id equal to received id does not exist', () => {
      expect(S.getRaceBetAmountById(M.mockApplicationStateWithRaces, '999')).toBeUndefined();
   });
});
