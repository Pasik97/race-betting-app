
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import { createStore } from "redux";
import reducers from "store/reducers";
import RacesPage from "../RacesPage";
import * as A from 'store/races/actions';

jest.mock('modules/RacesPage/RacesList/RacesList');
jest.mock('components/LoaderWithOverlay/LoaderWithOverlay');

describe('<RacesPage />', () => {
   it('should render Loader and RacesList components', () => {
      const component = create(<Provider store={createStore(reducers)}><RacesPage /></Provider>);

      expect(component.toJSON()).toMatchSnapshot();
   });

   it('should dispatch getRacesRequest action after mount', () => {
      const getRacesRequestSpy = jest.spyOn(A, 'getRacesRequest');

      let component = create(<Provider store={createStore(reducers)}><RacesPage /></Provider>);

      component.update(<Provider store={createStore(reducers)}><RacesPage /></Provider>);

      expect(getRacesRequestSpy).toHaveBeenCalled();
   });
});
