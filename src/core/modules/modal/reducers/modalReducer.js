import { combineReducers } from 'redux';

import centralModalReducer from './centralModalReducer';

const modalReducer = combineReducers({
  central: centralModalReducer,
});

export default modalReducer;
