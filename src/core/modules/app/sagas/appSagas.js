import { put, takeEvery } from 'redux-saga/effects';
import { initAppSuccess } from '../actions/appActions';
import { INIT_APP_START } from '../constants/appConstants';
import i18next from '../../../i18next';

export function* initializeApp() {
  i18next.changeLanguage('ru');
  yield put(initAppSuccess());
}

export function* appSaga() {
  yield takeEvery(INIT_APP_START, initializeApp);
}
