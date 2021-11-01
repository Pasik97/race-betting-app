import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as P from './parts';
import { ParticipantProps } from './constants';
import * as TP from 'components/BasicTable/parts';
import ApplicationState from 'store/ApplicationState';
import { getParticipantById } from 'store/participants/selectors';
import { getRaceActiveStatusById, getRaceBetById } from 'store/races/selectors';
import { Places } from 'store/races/constants';
import { setRaceBetPlace } from 'store/races/actions';

const Participant: React.FC<ParticipantProps> = ({ participantId, raceId }) => {
   const dispatch = useDispatch();

   const participant = useSelector((state: ApplicationState) => getParticipantById(state, participantId));
   const raceBet = useSelector((state: ApplicationState) => getRaceBetById(state, raceId));
   const isRaceActive = useSelector((state: ApplicationState) => getRaceActiveStatusById(state, raceId));

   const onRadioChange = (placeToSet: Places) => {
      dispatch(setRaceBetPlace(raceId, placeToSet, participantId));
   }

   return (
      <P.StyledRow>
         <TP.Cell>{participant?.id}</TP.Cell>
         <TP.Cell>{participant?.body}</TP.Cell>
         {Object.values(Places).map((place) => (
            <TP.Cell key={place}>
               <P.Radio
                  type="radio"
                  disabled={!isRaceActive}
                  checked={raceBet?.[place] === participantId}
                  onChange={() => onRadioChange(place)}
               />
            </TP.Cell>
         ))}
      </P.StyledRow>
   )
}

export default Participant;
