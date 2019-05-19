import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';

import todosReducer from './reducers/highlighter';

/**
 * Reducers
 */
const rootReducer = Redux.combineReducers({
  todos: todosReducer
  // highlights: highlightsReducer
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
