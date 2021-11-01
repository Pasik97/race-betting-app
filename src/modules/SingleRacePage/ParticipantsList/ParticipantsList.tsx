import React from 'react';
import { useSelector } from 'react-redux';
import * as P from './parts';
import * as TP from 'components/BasicTable/parts';
// import ApplicationState from 'store/ApplicationState';
// import { getRaceById } from 'store/races/selectors';
import { getParticipants } from 'store/participants/selectors';

interface ParticipantsListProps {
   raceId: string;
}

const ParticipantsList: React.FC<ParticipantsListProps> = (({ raceId }) => {
   // const race = useSelector((state: ApplicationState) => getRaceById(state, raceId));
   const participants = useSelector(getParticipants);

   return !participants.length ? null : (
      <P.ParticipantsListWrapper>
         <P.StyledRow>
            <TP.HeaderCell>Id</TP.HeaderCell>
            <TP.HeaderCell>Participant Name</TP.HeaderCell>
            <TP.HeaderCell>🥇</TP.HeaderCell>
            <TP.HeaderCell>🥈</TP.HeaderCell>
            <TP.HeaderCell>🥉</TP.HeaderCell>
         </P.StyledRow>
         {/* {filteredRacesOrder?.map((id) => (
            <TP.Row key={races[id].id}>
               <TP.Cell><P.StyledLink to={'/races/' + races[id].id}>{races[id].id}</P.StyledLink></TP.Cell>
               <TP.Cell><P.StyledLink to={'/races/' + races[id].id}>{races[id].name}</P.StyledLink></TP.Cell>
               <TP.Cell><TP.Label>{races[id].active ? 'Active' : 'Inactive'}</TP.Label></TP.Cell>
            </TP.Row>
         ))} */}
      </P.ParticipantsListWrapper>
   );
});

export default ParticipantsList;
