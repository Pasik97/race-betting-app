import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RaceTitleWrapper = styled.div`
   display: flex;
   align-items: baseline;
   justify-content: space-between;
`;

export const RaceTitle = styled.h2`
   color: #01263A;
   font-weight: 400;
   font-size: 24px;
   line-height: 27px;
   margin: 16px 0 0 0;
`;

export const RaceTitleStatus = styled.p`
   margin: 0 0 0 8px;
   font-size: 16px; 
   line-height: 18px;
   white-space: nowrap;
`;

export const StyledLink = styled(Link)`
   display: inline-flex;
   align-items: center;
   height: 32px;
   color: #1a1a1a;
   font-size: 13px;
   line-height: 16px;
   text-decoration: none;
   background: #f5f5f5;
   padding: 0px 20px;
   border-radius: 24px;

   &:hover {
      background: #eeeeee;
   }
`;
