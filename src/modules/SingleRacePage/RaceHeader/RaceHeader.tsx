import React from 'react';
import { useSelector } from 'react-redux';
import * as P from './parts';
import ApplicationState from 'store/ApplicationState';
import { getRaceById } from 'store/races/selectors';

interface RaceHeaderProps {
   raceId: string;
}

const RaceHeader: React.FC<RaceHeaderProps> = (({ raceId }) => {
   const race = useSelector((state: ApplicationState) => getRaceById(state, raceId));

   return (
      <>
         <P.StyledLink to="/races">‹ Back to races page</P.StyledLink>
         <P.RaceTitleWrapper>
            {race?.name && <P.RaceTitle title={race.name}>{race.name}</P.RaceTitle>}
            {race?.active !== undefined && <P.RaceTitleStatus>Status: {race.active ? 'Active' : 'Inactive'}</P.RaceTitleStatus>}
         </P.RaceTitleWrapper>
      </>
   )
});

export default RaceHeader;
