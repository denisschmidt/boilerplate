import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import modalReducer from './modules/modal/reducers/modalReducer';
import appReducer from './modules/app/reducer/appReducer';
import notifyReducer from './modules/notify/reducer/notifyReducer';
import appHistory from './modules/app/history/appHistory';
import utilityDataReducer from '../modules/utilityData/reducer/utilityDataReducer';

const appReducers = combineReducers({
  router: connectRouter(appHistory),
  modal: modalReducer,
  notify: notifyReducer,
  app: appReducer,
  utilityData: utilityDataReducer,
});

const coreReducers = (state, action) => {
  return appReducers(state, action);
};

export default coreReducers;
