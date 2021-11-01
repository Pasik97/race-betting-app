import * as M from './mockData';
import { transformParticipantsToParticipantsState } from '../helpers';

describe('transformParticipantsToParticipantsState', () => {
   it('should return object with participants', () => {
      expect(transformParticipantsToParticipantsState(M.mockParticipants)).toEqual(M.transformedParticipants);
   });
});
