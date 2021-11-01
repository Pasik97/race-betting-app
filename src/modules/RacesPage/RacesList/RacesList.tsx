import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as P from './parts';
import Race from './Race';
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
         {filteredRacesOrder?.map((id) => <Race key={id} race={races[id]} />)}
      </P.RacesListWrapper>
   );
};

export default RacesList;
