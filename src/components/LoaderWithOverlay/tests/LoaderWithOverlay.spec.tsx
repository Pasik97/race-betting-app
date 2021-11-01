import { create } from "react-test-renderer";
import LoaderWithOverlay from "../LoaderWithOverlay";

describe('<LoaderWithOverlay />', () => {
   it('should render divs if loading prop is set to true', () => {
      const component = create(<LoaderWithOverlay loading />);

      expect(component.toJSON()).toMatchSnapshot();
   });

   it('should null if loading prop is set to false', () => {
      const component = create(<LoaderWithOverlay loading={false} />);

      expect(component.toJSON()).toBeNull();
   });
});
