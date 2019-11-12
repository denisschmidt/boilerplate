import appReducer, { initialState } from '../appReducer';
import { INIT_APP_START, INIT_APP_SUCCESS, INIT_APP_FAIL } from '../../constants/appConstants';

describe('>>>> REDUCERS ---- test src/app/reducer/appReducer.js', () => {
  it('+++ reducer for initialState', () => {
    const state = appReducer(initialState, { type: null });

    expect(state).toEqual(initialState);
  });

  it('+++ reducer for INIT_APP_START', () => {
    const state = appReducer(initialState, { type: INIT_APP_START });

    expect(state).toEqual(initialState);
  });

  it('+++ reducer for INIT_APP_SUCCESS', () => {
    const state = appReducer(initialState, { type: INIT_APP_SUCCESS });

    expect(state).toEqual({ isLoading: false, isError: false });
  });

  it('+++ reducer for INIT_APP_FAIL', () => {
    const state = appReducer(initialState, { type: INIT_APP_FAIL });

    expect(state).toEqual({ isLoading: false, isError: true });
  });
});
