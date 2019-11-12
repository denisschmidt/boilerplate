import { fork } from 'redux-saga/effects';

import { appSaga } from './modules/app/sagas/appSagas';
import { utilityDataSaga } from '../modules/utilityData/saga/utilityDataSagas';

export function* coreSagas() {
  yield fork(appSaga);
  yield fork(utilityDataSaga);
}
