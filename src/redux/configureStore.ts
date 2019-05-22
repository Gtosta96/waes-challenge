import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';

import highlighterReducer from './reducers/highlighter';

/**
 * Reducers
 */
const rootReducer = Redux.combineReducers({
  highlighter: highlighterReducer
});

export type IAppState = ReturnType<typeof rootReducer>;

/**
 * Epics
 */
export default function configureStore() {
  const store = Redux.createStore(
    rootReducer,
    ReduxDevtools.composeWithDevTools(Redux.applyMiddleware())
  );

  return store;
}
