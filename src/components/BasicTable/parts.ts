import styled from "styled-components";
import media from "utils/media";

export const Cell = styled.div`
   color: #1a1a1a;
   font-size: 16px;
   line-height: 21px;
   border-right: 1px solid #1a1a1a;
   padding: 6px;
   display: flex;
   align-items: center;

   &:last-of-type {
      border-right: none;
   }
`;

export const HeaderCell = styled(Cell)`
   font-weight: 700;
   background-color: #cccccc;
   color: #01263A;
   border-top: 1px solid #1a1a1a;
`;

export const Row = styled.div`
   display: grid;
   grid-template-columns: 0.5fr 2fr 1fr;
   border: 1px solid #1a1a1a;
   border-top: none;

   &:nth-of-type(2n+3) {
      ${Cell} {
         background-color: #eeeeee;
      }
   }

   ${media.fromTablet} {
      grid-template-columns: 1fr 4fr 1.5fr;
   }

   ${media.fromDesktop} {
      grid-template-columns: 1fr 6fr 1.5fr;
   }
`;

export const Label = styled.p`
   margin: 0;
   overflow-wrap: anywhere;
`;
