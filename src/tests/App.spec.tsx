import { create } from 'react-test-renderer';
import App from '../App';

describe('<App />', () => {
   it('should render properly', () => {
      const component = create(<App />);

      expect(component.toJSON()).toMatchSnapshot();
   });
});
