import { create } from "react-test-renderer";
import { Provider } from "react-redux";
import RaceHeader from "../RaceHeader";
import { createMockRaceStore } from "modules/SingleRacePage/tests/mockData";
import { mockRace, mockRacesState, secondMockRace } from "store/races/tests/mockData";
import { BrowserRouter } from "react-router-dom";

describe('<RaceHeader />', () => {
   it('should render link to races page, race name and label "Active" if race is active', () => {
      const component = create(
         <BrowserRouter>
            <Provider store={createMockRaceStore(mockRacesState)}>
               <RaceHeader raceId={mockRace.id.toString()} />
            </Provider>
         </BrowserRouter>,
      );

      expect(component.toJSON()).toMatchSnapshot();
   });

   it('should render link to races page, race name and label "Inactive" if race is inactive', () => {
      const component = create(
         <BrowserRouter>
            <Provider store={createMockRaceStore(mockRacesState)}>
               <RaceHeader raceId={secondMockRace.id.toString()} />
            </Provider>
         </BrowserRouter>,
      );

      expect(component.toJSON()).toMatchSnapshot();
   });
});
