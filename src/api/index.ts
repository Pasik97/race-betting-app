import { AxiosResponse } from 'axios';
import req from './req';
import * as paths from './paths';
import { Race } from './apiModels';
import { replaceId } from './helpers';

export const getRaces = async (): Promise<AxiosResponse<Race[]>> => req.get(paths.races);

export const getRaceById = async (raceId: string): Promise<AxiosResponse<Race[]>> => req.get(replaceId(paths.racesId, raceId));
