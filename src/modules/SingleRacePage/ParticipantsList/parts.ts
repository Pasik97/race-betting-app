import styled from 'styled-components';
import { Row } from 'components/BasicTable/parts';
import media from 'utils/media';

export const ParticipantsListWrapper = styled.div``;

export const StyledRow = styled(Row)`
   grid-template-columns: 0.5fr 2fr 0.5fr 0.5fr 0.5fr;

   ${media.fromTablet} {
      grid-template-columns: 0.5fr 4fr 0.5fr 0.5fr 0.5fr;
   }

   ${media.fromDesktop} {
      grid-template-columns: 0.5fr 6fr 0.5fr 0.5fr 0.5fr;
   }
`;

export const Radio = styled.input``;
