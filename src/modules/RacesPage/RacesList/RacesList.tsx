import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as P from './parts';
import * as TP from 'components/BasicTable/parts';
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
            <TP.Label>Show only active races:</TP.Label>
            <P.Checkbox
               type="checkbox"
               name="activeRaces"
               checked={shouldDisplayActive}
               onChange={onCheckboxChange}
            />
         </P.CheckboxWrapper>
         <TP.Row>
            <TP.HeaderCell>Id</TP.HeaderCell>
            <TP.HeaderCell>Race Name</TP.HeaderCell>
            <TP.HeaderCell>Status</TP.HeaderCell>
         </TP.Row>
         {filteredRacesOrder?.map((id) => (
            <TP.Row key={races[id].id}>
               <TP.Cell><P.StyledLink to={'/races/' + races[id].id}>{races[id].id}</P.StyledLink></TP.Cell>
               <TP.Cell><P.StyledLink to={'/races/' + races[id].id}>{races[id].name}</P.StyledLink></TP.Cell>
               <TP.Cell><TP.Label>{races[id].active ? 'Active' : 'Inactive'}</TP.Label></TP.Cell>
            </TP.Row>
         ))}
      </P.RacesListWrapper>
   );
};

export default RacesList;
