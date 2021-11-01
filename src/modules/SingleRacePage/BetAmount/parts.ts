import styled from "styled-components";

export const InputWrapper = styled.div`
   display: flex;
   margin: 24px 0;
`;

export const Label = styled.p`
   margin: 0 8px 0 0;
   font-size: 16px;
   line-height: 18px;
   color: #1a1a1a;
`;

export const Input = styled.input`
   color: #1a1a1a;
   font-size: 16px;
   line-height: 21px;
   padding: 0;
   border: none;
   outline: none;
   border-bottom: 1px solid #dddddd;

   &:focus {
      border-bottom: 1px solid #1a1a1a;
   }
`;

