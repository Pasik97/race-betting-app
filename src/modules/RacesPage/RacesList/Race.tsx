import React from 'react';
import * as P from './parts';
import * as TP from 'components/BasicTable/parts';
import { RaceWithBet } from 'store/races/constants';

interface RaceProps {
   race: RaceWithBet;
}

const Race: React.FC<RaceProps> = ({ race }) => (
   <TP.Row key={race.id}>
      <TP.Cell><P.StyledLink to={'/races/' + race.id}>{race.id}</P.StyledLink></TP.Cell>
      <TP.Cell><P.StyledLink to={'/races/' + race.id}>{race.name}</P.StyledLink></TP.Cell>
      <TP.Cell><TP.Label>{race.active ? 'Active' : 'Inactive'}</TP.Label></TP.Cell>
   </TP.Row>
);

export default Race;
