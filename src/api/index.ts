import { AxiosResponse } from 'axios';
import req from './req';
import * as paths from './paths';
import { Race } from './apiModels';

export const getRaces = async (): Promise<AxiosResponse<Race[]>> => req.get(paths.races);
