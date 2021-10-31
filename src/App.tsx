import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import configureStore from 'store/configureStore';

const store = configureStore();

const Dispatcher: React.FC = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch({ type: 'action' })
   })

   return null;
}

const App: React.FC = () => {
   return (
      <Provider store={store}>
         <Dispatcher />
         <div className="App">
            <header className="App-header">
               <p>
                  Edit <code>src/App.js</code> and save to reload.
               </p>
               <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Learn React
               </a>
            </header>
         </div>
      </Provider>
   )
}

export default App;
