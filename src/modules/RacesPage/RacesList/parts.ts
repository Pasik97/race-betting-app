import { Link } from "react-router-dom";
import styled from "styled-components";

export const RacesListWrapper = styled.div``;

export const StyledLink = styled(Link)`
   color: #1a1a1a;
   font-size: 16px;
   line-height: 21px;
   text-decoration: none;

   &:hover {
      color: #01263A;
   }
`;

export const CheckboxWrapper = styled.div`
   display: flex;
   align-items: baseline;
   margin-bottom: 16px;
`;

export const Checkbox = styled.input`
   margin: 0 0 0 16px;
`;
