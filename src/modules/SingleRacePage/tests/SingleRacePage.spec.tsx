
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import { createStore } from "redux";
import reducers from "store/reducers";
import SingleRacePage from "../SingleRacePage";
import * as RA from 'store/races/actions';
import * as PA from 'store/participants/actions';
import { mockSingleRacePageProps } from "./mockData";

jest.mock('modules/SingleRacePage/RaceHeader/RaceHeader');
jest.mock('modules/SingleRacePage/BetAmount/BetAmount');
jest.mock('modules/SingleRacePage/ParticipantsList/ParticipantsList');
jest.mock('components/LoaderWithOverlay/LoaderWithOverlay');

describe('<SingleRacePage />', () => {
   it('should render Loader and RacesList components', () => {
      const component = create(<Provider store={createStore(reducers)}><SingleRacePage {...mockSingleRacePageProps} /></Provider>);

      expect(component.toJSON()).toMatchSnapshot();
   });

   it('should dispatch getRaceByIdRequest and getParticipantsRequest actions after mount', () => {
      const getRaceByIdRequestSpy = jest.spyOn(RA, 'getRaceByIdRequest');
      const getParticipantsRequestSpy = jest.spyOn(PA, 'getParticipantsRequest');

      let component = create(<Provider store={createStore(reducers)}><SingleRacePage {...mockSingleRacePageProps} /></Provider>);

      component.update(<Provider store={createStore(reducers)}><SingleRacePage {...mockSingleRacePageProps} /></Provider>);

      expect(getRaceByIdRequestSpy).toHaveBeenCalled();
      expect(getParticipantsRequestSpy).toHaveBeenCalled();
   });
});
