import { DATA_ENTITIES } from '../constants/utilityDataConstants';
import {
  createUtilityDataClearActions,
  createUtilityDataStartActions,
  createUtilityLoadMoreRequestAction,
} from '../utils/actionUtils';

// fetch
export const fetchRequestStart = createUtilityDataStartActions(DATA_ENTITIES.DATA);

// load more
export const loadMoreRequestStart = createUtilityLoadMoreRequestAction(DATA_ENTITIES.DATA);

// reset
export const clearDataState = createUtilityDataClearActions(DATA_ENTITIES.DATA);
