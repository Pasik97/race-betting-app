import React from 'react';
import * as P from './parts';

const TopBar: React.FC = () => (
   <P.TopBarWrapper>
      <P.AppTitle title="Race betting system" to='/'>Race betting system</P.AppTitle>
      <P.LinksWrapper>
         <P.StyledLink to='/races'>Races</P.StyledLink>
      </P.LinksWrapper>
   </P.TopBarWrapper>
)

export default TopBar;
