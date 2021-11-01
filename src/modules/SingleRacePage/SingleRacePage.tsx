import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as P from './parts';
import { SingleRacePageProps } from './constants';
import RaceHeader from './RaceHeader/RaceHeader';
import BetAmount from './BetAmount/BetAmount';
import ParticipantsList from './ParticipantsList/ParticipantsList';
import LoaderWithOverlay from 'components/LoaderWithOverlay/LoaderWithOverlay';
import { getIsFetchingRaces } from 'store/races/selectors';
import { getRaceByIdRequest } from 'store/races/actions';
import { getParticipantsRequest } from 'store/participants/actions';
import { getIsFetchingParticipants } from 'store/participants/selectors';

const SingleRacePage: React.FC<SingleRacePageProps> = (
   { match: { params: { id } } }: SingleRacePageProps,
) => {
   const dispatch = useDispatch();

   const isFetchingRaces = useSelector(getIsFetchingRaces);
   const isFetchingParticipants = useSelector(getIsFetchingParticipants);

   useEffect(() => {
      dispatch(getRaceByIdRequest(id));
      dispatch(getParticipantsRequest());
   }, [dispatch, id]);

   return (
      <P.SingleRacePageWrapper>
         <LoaderWithOverlay loading={isFetchingRaces || isFetchingParticipants} />
         <RaceHeader raceId={id} />
         <BetAmount raceId={id} />
         <ParticipantsList raceId={id} />
      </P.SingleRacePageWrapper>
   );
}

export default SingleRacePage;
