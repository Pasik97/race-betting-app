import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'utils/media';

export const TopBarWrapper = styled.header`
   display: flex;
   align-items: baseline;
   flex-direction: column;
   color: #1a1a1a;
   box-shadow: rgb(0 0 0 / 64%) 0px 2px 8px -5px;
   padding: 16px 24px;
   margin-bottom: 32px;

   ${media.fromTablet} {
      display: flex;
      flex-direction: row;
      padding: 16px 10%;
   }
`;

export const AppTitle = styled(Link)`
   font-size: 28px;
   line-height: 32px;
   color: #01263A;
   margin: 0;
   font-weight: 700;
   cursor: pointer;
   text-decoration: none;
`;

export const LinksWrapper = styled.div`
   margin-top: 8px;

   ${media.fromTablet} {
      margin-left: 64px;
   }
`;

export const StyledLink = styled(Link)`
   color: #1a1a1a;
   font-size: 21px;
   line-height: 24px;
   text-decoration: none;

   &:hover {
      color: #01263A;
   }
`;

