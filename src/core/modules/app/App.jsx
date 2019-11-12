import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import HotApp from './HotApp';
import configureStore from './store/configureStore';
import appHistory from './history/appHistory';

const store = configureStore();

const App = () => {
  return (
    <Provider {...{ store }}>
      <ConnectedRouter history={appHistory}>
        <HotApp />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
