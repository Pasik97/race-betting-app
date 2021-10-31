import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RacesList from './RacesList/RacesList';
import { getRacesRequest } from 'store/races/actions';

const RacesPage: React.FC = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getRacesRequest());
   }, [dispatch]);

   return <RacesList />;
}

export default RacesPage;
