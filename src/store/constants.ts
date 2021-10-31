import { EmptyObject, Store } from "redux";
import { Persistor } from "redux-persist";
import { PersistPartial } from "redux-persist/es/persistReducer";
import ApplicationState from "./ApplicationState";

export const lsStateKey = 'localStorageState';

export type ApplicationStore = Store<EmptyObject & ApplicationState & PersistPartial>;

export interface StoreHandlers {
   store: ApplicationStore;
   persistor: Persistor;
}
