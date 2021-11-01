import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Race from "../Race";
import { mockRace, secondMockRace } from "store/races/tests/mockData";

describe('<Race />', () => {
   it('should render race id and name as link to single race page and "Active" label if race is active', () => {
      const component = create(
         <BrowserRouter>
            <Race race={mockRace} />
         </BrowserRouter>,
      );

      expect(component.toJSON()).toMatchSnapshot();
   });

   it('should render race id and name as link to single race page and "Inactive" label if race is inactive', () => {
      const component = create(
         <BrowserRouter>
            <Race race={secondMockRace} />
         </BrowserRouter>,
      );

      expect(component.toJSON()).toMatchSnapshot();
   });
});
