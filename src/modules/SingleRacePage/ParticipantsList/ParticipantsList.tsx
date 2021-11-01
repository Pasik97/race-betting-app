import React from 'react';
import { useSelector } from 'react-redux';
import * as P from './parts';
import { ParticipantsListProps, placesEmojis } from './constants';
import Participant from './Participant';
import * as TP from 'components/BasicTable/parts';
import ApplicationState from 'store/ApplicationState';
import { getRaceById } from 'store/races/selectors';
import { getParticipantsEmptyStatus } from 'store/participants/selectors';

const ParticipantsList: React.FC<ParticipantsListProps> = (({ raceId }) => {
   const race = useSelector((state: ApplicationState) => getRaceById(state, raceId));
   const participants = useSelector(getParticipantsEmptyStatus);

   return !participants ? null : (
      <P.ParticipantsListWrapper>
         <P.StyledRow>
            <TP.HeaderCell>Id</TP.HeaderCell>
            <TP.HeaderCell>Participant Name</TP.HeaderCell>
            {placesEmojis.map((emoji) => (
               <TP.HeaderCell key={emoji}>{emoji}</TP.HeaderCell>
            ))}
         </P.StyledRow>
         {race?.participants?.map((id) => <Participant key={id} participantId={id} raceId={raceId} />)}
      </P.ParticipantsListWrapper>
   );
});

export default ParticipantsList;
