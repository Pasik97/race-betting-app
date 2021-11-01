import { create } from "react-test-renderer";
import { Provider } from "react-redux";
import ParticipantsList from "../ParticipantsList";
import { createMockRaceStore } from "modules/SingleRacePage/tests/mockData";
import { mockRace, mockRacesState, secondMockRace } from "store/races/tests/mockData";
import { BrowserRouter } from "react-router-dom";
import { mockParticipantsState } from "store/participants/tests/mockData";

jest.mock('../Participant');

describe('<ParticipantsList />', () => {
   it('should render table header and participant component', () => {
      const component = create(
         <BrowserRouter>
            <Provider store={createMockRaceStore(mockRacesState, mockParticipantsState)}>
               <ParticipantsList raceId={mockRace.id.toString()} />
            </Provider>
         </BrowserRouter>,
      );

      expect(component.toJSON()).toMatchSnapshot();
   });

   it('should render null if participants state is empty', () => {
      const component = create(
         <BrowserRouter>
            <Provider store={createMockRaceStore(mockRacesState)}>
               <ParticipantsList raceId={secondMockRace.id.toString()} />
            </Provider>
         </BrowserRouter>,
      );

      expect(component.toJSON()).toBeNull();
   });
});
