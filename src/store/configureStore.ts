import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as C from './constants';
import reducers from './reducers';
import rootSaga from './sagas';

const configureStore = (): C.StoreHandlers => {
   const sagaMiddleware = createSagaMiddleware();
   const persistedReducer = persistReducer(
      { key: C.lsStateKey, storage },
      reducers,
   );

   const store: C.ApplicationStore = createStore(
      persistedReducer,
      composeWithDevTools(
         applyMiddleware(sagaMiddleware),
      )
   );

   const persistor = persistStore(store);

   sagaMiddleware.run(rootSaga);

   return { store, persistor };
}

export default configureStore;
