import { create } from "react-test-renderer";
import HomePage from "../HomePage";

describe('<HomePage />', () => {
   it('should render welcome text', () => {
      const component = create(<HomePage />);

      expect(component.toJSON()).toMatchSnapshot();
   });
});
