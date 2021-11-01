import { BrowserRouter } from "react-router-dom";
import { create } from "react-test-renderer";
import TopBar from "../TopBar";

describe('<TopBar />', () => {
   it('should render header with title as link to home page and link to races page', () => {
      const component = create(<BrowserRouter><TopBar /></BrowserRouter>);

      expect(component.toJSON()).toMatchSnapshot();
   });
});
