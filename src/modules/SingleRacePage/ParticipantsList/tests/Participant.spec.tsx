import { act, create } from "react-test-renderer";
import { Provider } from "react-redux";
import Participant from "../Participant";
import { Radio } from "../parts";
import * as A from 'store/races/actions';
import { createMockRaceStore } from "modules/SingleRacePage/tests/mockData";
import { mockRace, mockRacesState } from "store/races/tests/mockData";
import { mockParticipant, mockParticipantsState } from "store/participants/tests/mockData";
import { Places } from "store/races/constants";

describe('<Participant />', () => {
   it('should render participant id name and 3 inputs with type set to radio', () => {
      const component = create(
         <Provider store={createMockRaceStore(mockRacesState, mockParticipantsState)}>
            <Participant raceId={mockRace.id.toString()} participantId={mockParticipant.id} />
         </Provider>,
      );

      expect(component.toJSON()).toMatchSnapshot();
   });

   describe('onRadioChange', () => {
      it('should dispatch setRaceBetPlace', () => {
         const setRaceBetPlaceSpy = jest.spyOn(A, 'setRaceBetPlace');

         const component = create(
            <Provider store={createMockRaceStore(mockRacesState, mockParticipantsState)}>
            <Participant raceId={mockRace.id.toString()} participantId={mockParticipant.id} />
         </Provider>,
         );
         const radio = component.root.findAllByType(Radio)[0];
         
         act(() => {
            radio.props.onChange(Places.First);
         });

         expect(setRaceBetPlaceSpy).toHaveBeenCalled();
      });
   });
});
