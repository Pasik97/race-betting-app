import axios from "axios";
import * as api from '../';
import * as paths from '../paths';
import { config } from "../constants";
import { replaceId } from "../helpers";

const axiosGetSpy = jest.spyOn(axios, 'get');

describe('getRaces', () => {
   it(`should call axios get method with ${paths.races}`, () => {
      api.getRaces();

      expect(axiosGetSpy).toHaveBeenCalledWith(paths.races, config);
   });
});

describe('getRaceById', () => {
   const mockRaceId = '1';
   const mockPath = replaceId(paths.racesId, '1');

   it(`should call axios get method with ${mockPath} if received ${mockRaceId} as argument`, () => {
      api.getRaceById(mockRaceId);

      expect(axiosGetSpy).toHaveBeenCalledWith(mockPath, config);
   });
});

describe('getParticipants', () => {
   it(`should call axios get method with ${paths.participants}`, () => {
      api.getParticipants();

      expect(axiosGetSpy).toHaveBeenCalledWith(paths.participants, config);
   });
});
