import { racesId, races } from '../paths';
import { replaceId } from '../helpers';

describe('replaceId', () => {
   it('should replace id placeholder with received argument', () => {
      expect(replaceId(racesId, '1')).toEqual(races + '/1');
   });
});
