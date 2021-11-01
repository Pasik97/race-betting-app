import React from 'react';
import * as P from './parts';

interface LoaderWithOverlayProps {
   loading: boolean;
}

const LoaderWithOverlay: React.FC<LoaderWithOverlayProps> = ({ loading }) => !loading ? null : (
   <P.Overlay>
      <P.OverlayInner>
         <P.OverlayContent>
            <P.Spinner />
         </P.OverlayContent>
      </P.OverlayInner>
   </P.Overlay>
);

export default LoaderWithOverlay;
