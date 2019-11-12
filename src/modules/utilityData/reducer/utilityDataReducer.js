import { combineReducers } from 'redux';

import { DATA_ENTITIES } from '../constants/utilityDataConstants';
import { createUtilityDataReducer } from '../utils/reducersUtils';

const utilityDataReducer = combineReducers({
  [DATA_ENTITIES.DATA]: createUtilityDataReducer(DATA_ENTITIES.DATA),
});

export default utilityDataReducer;
