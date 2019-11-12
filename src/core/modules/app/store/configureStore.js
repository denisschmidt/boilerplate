import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import createReducers from '../../../createReducers';
import { coreSagas } from '../../../coreSagas';
import appHistory from '../history/appHistory';
import { configureRequests } from '../../../utils/fetch';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}) => {
  const reducers = createReducers();

  const reactRouterMiddleware = routerMiddleware(appHistory);

  const middlewares =
    process.env.NODE_ENV !== 'production'
      ? [sagaMiddleware, reactRouterMiddleware]
      : [sagaMiddleware, reactRouterMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  /* eslint-disable */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(reducers, initialState, composeEnhancers(...enhancers));

  sagaMiddleware.run(coreSagas);

  configureRequests(store);

  if (module.hot) {
    module.hot.accept('./createReducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('../../../createReducers').default();
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};

export default configureStore;
