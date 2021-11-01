import { act, create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import * as M from './mockData';
import RacesList from "../RacesList";
import { Checkbox } from "../parts";
import { mockRacesState } from "store/races/tests/mockData";
import { initilRacesState } from "store/races/constants";

jest.mock('../Race');

describe('<RacesList />', () => {
   it('should render checkbox and races list', () => {
      const component = create(
         <BrowserRouter>
            <Provider store={M.createMockRaceStore(mockRacesState)}>
               <RacesList />
            </Provider>
         </BrowserRouter>,
      );

      expect(component.toJSON()).toMatchSnapshot();
   });

   it('should render only active races if shouldDisplayActive is set to true', () => {
      const component = create(
         <BrowserRouter>
            <Provider store={M.createMockRaceStore(mockRacesState)}>
               <RacesList />
            </Provider>
         </BrowserRouter>,
      );

      const checkbox = component.root.findByType(Checkbox);

      act(() => {
         checkbox.props.onChange({ target: { checked: true } });
      });

      expect(component.toJSON()).toMatchSnapshot();
   });

   it('should render null if races order is an empty array', () => {
      const component = create(
         <BrowserRouter>
            <Provider store={M.createMockRaceStore(initilRacesState)}>
               <RacesList />
            </Provider>
         </BrowserRouter>,
      );

      expect(component.toJSON()).toBeNull();
   });

   describe('onCheckboxChange', () => {
      it('should set checkbox value', () => {
         const component = create(
            <BrowserRouter>
               <Provider store={M.createMockRaceStore(mockRacesState)}>
                  <RacesList />
               </Provider>
            </BrowserRouter>,
         );
         let checkbox = component.root.findByType(Checkbox);

         act(() => {
            checkbox.props.onChange({ target: { checked: true } });
         });

         checkbox = component.root.findByType(Checkbox);

         expect(checkbox.props.checked).toEqual(true);

         act(() => {
            checkbox.props.onChange({ target: { checked: false } });
         });

         checkbox = component.root.findByType(Checkbox);

         expect(checkbox.props.checked).toEqual(false);
      });
   });
});
