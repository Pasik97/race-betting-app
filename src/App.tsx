import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import TopBar from 'modules/TopBar/TopBar';
import HomePage from 'modules/HomePage/HomePage';
import RacesPage from 'modules/RacesPage/RacesPage';
import configureStore from 'store/configureStore';
import media from 'utils/media';

const AppWrapper = styled.div`
   margin: 0 8px;

   ${media.fromTablet} {
      margin: 0 128px;
   }
   
   ${media.fromDesktop} {
      margin: 0 25%;
   }
`;

const store = configureStore();

const App: React.FC = () => (
   <Provider store={store}>
      <BrowserRouter>
         <TopBar />
         <AppWrapper>
            <Switch>
               <Route exact path='/' component={HomePage} />
               <Route exact path='/races' component={RacesPage} />
            </Switch>
         </AppWrapper>
      </BrowserRouter>
   </Provider>
);

export default App;
