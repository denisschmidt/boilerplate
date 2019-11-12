import { fork } from 'redux-saga/effects';

import { DATA_ENTITIES } from '../constants/utilityDataConstants';
import { createUtilityDataWatcher, createUtilityLoadMoreWatcher } from '../utils/sagasUtils';

function* loadMoreSaga() {
  // eslint-disable-next-line no-undef
  const api = (body, queryParams) => window.fetch(body?.id, queryParams);

  yield fork(
    createUtilityLoadMoreWatcher({
      api,
      entityName: DATA_ENTITIES.DATA,
      pathToServerData: ['data', 'items'],
      mapper: () => {},
    }),
  );
}

export function* utilityDataSaga() {
  yield fork(loadMoreSaga);
  yield fork(createUtilityDataWatcher(DATA_ENTITIES.DATA, ['data', 'items'], () => {}));
}
