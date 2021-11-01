import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   position: absolute;
   background: #eeeeee;
   opacity: 0.44;
   z-index: 10;
`

export const OverlayInner = styled.div`
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   position: absolute;
`;

export const OverlayContent = styled.div`
   left: 50%;
   position: absolute;
   top: 50%;
   transform: translate(-50%, -50%);
`;

const spin = keyframes`
   100% {
      transform: rotate(360deg);
   }
`;

export const Spinner = styled.span`
   width: 150px;
   height: 150px;
   display: inline-block;
   border-width: 5px;
   border-color: rgba(255, 255, 255, 0.05);
   border-top-color: #fff;
   animation: ${spin} 1s infinite linear;
   border-radius: 100%;
   border-style: solid;
`;
