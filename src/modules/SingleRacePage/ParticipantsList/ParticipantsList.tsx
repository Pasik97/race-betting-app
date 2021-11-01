import React from 'react';
import { useSelector } from 'react-redux';
import * as P from './parts';
import ApplicationState from 'store/ApplicationState';
import { getRaceById } from 'store/races/selectors';

interface ParticipantsListProps {
   raceId: string;
}

const ParticipantsList: React.FC<ParticipantsListProps> = (({ raceId }) => {
   const race = useSelector((state: ApplicationState) => getRaceById(state, raceId));
   console.log(race)
   return (
      <P.ParticipantsListWrapper></P.ParticipantsListWrapper>
   );
});

export default ParticipantsList;
