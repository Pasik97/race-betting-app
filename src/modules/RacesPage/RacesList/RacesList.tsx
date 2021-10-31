import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import * as P from './parts';
import { getRaces } from 'store/races/selectors';

const RacesList: React.FC = () => {
   const races = useSelector(getRaces, shallowEqual);

   const [shouldDisplayActive, setShouldDisplayActive] = useState<boolean>(false);

   const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setShouldDisplayActive(event.target.checked);
   }

   const filteredRaces = !shouldDisplayActive ? races : races?.filter(({ active }) => active);

   return !races ? null : (
      <P.RacesListWrapper>
         <P.CheckboxWrapper>
            <P.Label>Show only active races:</P.Label>
            <P.Checkbox
               type="checkbox"
               name="activeRaces"
               checked={shouldDisplayActive}
               onChange={onCheckboxChange}
            />
         </P.CheckboxWrapper>
         <P.Row>
            <P.HeaderCell>Race Name</P.HeaderCell>
            <P.HeaderCell>Status</P.HeaderCell>
         </P.Row>
         {filteredRaces?.map((race) => (
            <P.Row key={race.id}>
               <P.Cell><P.StyledLink to={'/races/' + race.id}>{race.name}</P.StyledLink></P.Cell>
               <P.Cell><P.Label>{race.active ? 'Active' : 'Inactive'}</P.Label></P.Cell>
            </P.Row>
         ))}
      </P.RacesListWrapper>
   )
}

export default RacesList;
