import { put } from 'redux-saga/effects';

import { openNotify } from '../modules/notify/actions/notifyActions';
import { NOTIFY_TYPES, NOTIFY_SIZES } from '../modules/notify/constants/notifyConstants';

export function* successPut(message, action, payload, messageParams) {
  if (action) {
    yield put(action(payload));
  }
  yield put(openNotify({ message, type: NOTIFY_TYPES.SUCCESS, size: NOTIFY_SIZES.SMALL, messageParams }));
}

export function* failurePut(axiosError, action, defaultMessage = 'somethingWrong') {
  const message = axiosError?.response?.data?.userMessage || defaultMessage;
  if (action) {
    yield put(action(message));
  }
  yield put(openNotify({ message, type: NOTIFY_TYPES.FAILURE, size: NOTIFY_SIZES.SMALL  }));
}

export function* successNotify(title, message, action, payload) {
  if (action) {
    yield put(action(payload));
  }
  yield put(openNotify({ title, message, type: NOTIFY_TYPES.SUCCESS, size: NOTIFY_SIZES.LARGE }));
}

export function* failureNotify(title, message, action, payload) {
  if (action) {
    yield put(action(payload));
  }
  yield put(openNotify({ title, message, type: NOTIFY_TYPES.FAILURE, size: NOTIFY_SIZES.LARGE }));
}
