import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as P from './parts';
import RacesList from './RacesList/RacesList';
import { getRacesRequest } from 'store/races/actions';
import LoaderWithOverlay from 'components/LoaderWithOverlay/LoaderWithOverlay';
import { getisFetchingRaces } from 'store/races/selectors';

const RacesPage: React.FC = () => {
   const dispatch = useDispatch();

   const isFetchingRaces = useSelector(getisFetchingRaces);

   useEffect(() => {
      dispatch(getRacesRequest());
   }, [dispatch]);

   return (
      <P.RacesPageWrapper>
         <LoaderWithOverlay loading={isFetchingRaces} />
         <RacesList />
      </P.RacesPageWrapper>
   );
}

export default RacesPage;
