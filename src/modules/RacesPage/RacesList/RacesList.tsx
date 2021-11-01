import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as P from './parts';
import { getRaces, getRacesOrder } from 'store/races/selectors';

const RacesList: React.FC = () => {
   const races = useSelector(getRaces);
   const order = useSelector(getRacesOrder);

   const [shouldDisplayActive, setShouldDisplayActive] = useState<boolean>(false);

   const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setShouldDisplayActive(event.target.checked);
   }

   const filteredRacesOrder = !shouldDisplayActive ? order : order?.filter((id) => races[id].active);

   return !order.length ? null : (
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
            <P.HeaderCell>Id</P.HeaderCell>
            <P.HeaderCell>Race Name</P.HeaderCell>
            <P.HeaderCell>Status</P.HeaderCell>
         </P.Row>
         {filteredRacesOrder?.map((id) => (
            <P.Row key={races[id].id}>
               <P.Cell><P.StyledLink to={'/races/' + races[id].id}>{races[id].id}</P.StyledLink></P.Cell>
               <P.Cell><P.StyledLink to={'/races/' + races[id].id}>{races[id].name}</P.StyledLink></P.Cell>
               <P.Cell><P.Label>{races[id].active ? 'Active' : 'Inactive'}</P.Label></P.Cell>
            </P.Row>
         ))}
      </P.RacesListWrapper>
   );
};

export default RacesList;
