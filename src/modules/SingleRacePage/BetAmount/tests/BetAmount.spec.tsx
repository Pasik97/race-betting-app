import { act, create } from "react-test-renderer";
import { Provider } from "react-redux";
import BetAmount from "../BetAmount";
import { Input } from "../parts";
import * as A from 'store/races/actions';
import { createMockRaceStore } from "modules/SingleRacePage/tests/mockData";
import { mockRace, mockRacesState, secondMockRace } from "store/races/tests/mockData";

describe('<BetAmount />', () => {
   it('should render label and input', () => {
      const component = create(
         <Provider store={createMockRaceStore(mockRacesState)}>
            <BetAmount raceId={mockRace.id.toString()} />
         </Provider>,
      );

      expect(component.toJSON()).toMatchSnapshot();
   });

   describe('onAmountChange', () => {
      it('should set amount input value if user enter valid number', () => {
         const component = create(
            <Provider store={createMockRaceStore(mockRacesState)}>
               <BetAmount raceId={secondMockRace.id.toString()} />
            </Provider>,
         );
         let amountInput = component.root.findByType(Input);

         act(() => {
            amountInput.props.onChange({ target: { value: '12.11' } });
         });

         amountInput = component.root.findByType(Input);
   
         expect(amountInput.props.value).toEqual('12.11');
      });

      it('should dispatch setRaceBetAmount if user enter valid number', () => {
         const setRaceBetAmountSpy = jest.spyOn(A, 'setRaceBetAmount');

         const component = create(
            <Provider store={createMockRaceStore(mockRacesState)}>
               <BetAmount raceId={secondMockRace.id.toString()} />
            </Provider>,
         );
         const amountInput = component.root.findByType(Input);
         
         act(() => {
            amountInput.props.onChange({ target: { value: '' } });
         });

         expect(setRaceBetAmountSpy).toHaveBeenCalled();
      });

      it('should not set amount input value if user enter invalid value', () => {
         const component = create(
            <Provider store={createMockRaceStore(mockRacesState)}>
               <BetAmount raceId={secondMockRace.id.toString()} />
            </Provider>,
         );
         let amountInput = component.root.findByType(Input);

         act(() => {
            amountInput.props.onChange({ target: { value: 'awdawd' } });
         });

         amountInput = component.root.findByType(Input);
   
         expect(amountInput.props.value).toEqual('0');
      });

      it('should not set amount input value if decimals in number entered by user are longer than 2', () => {
         const component = create(
            <Provider store={createMockRaceStore(mockRacesState)}>
               <BetAmount raceId={secondMockRace.id.toString()} />
            </Provider>,
         );
         let amountInput = component.root.findByType(Input);

         act(() => {
            amountInput.props.onChange({ target: { value: '12.2222222' } });
         });

         amountInput = component.root.findByType(Input);
   
         expect(amountInput.props.value).toEqual('0');
      });
   });
});
