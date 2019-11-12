import { initAppStart, initAppFail, initAppSuccess } from '../appActions';
import { INIT_APP_START, INIT_APP_SUCCESS, INIT_APP_FAIL } from '../../constants/appConstants';

describe('>>>> ACTIONS ---- test src/app/actions/appActions.js', () => {
  it('+++ action initAppStart', () => {
    const start = initAppStart();

    expect(start).toEqual({ type: INIT_APP_START });
  });

  it('+++ action initAppSuccess', () => {
    const success = initAppSuccess();

    expect(success).toEqual({ type: INIT_APP_SUCCESS });
  });

  it('+++ action initAppFail', () => {
    const fail = initAppFail();

    expect(fail).toEqual({ type: INIT_APP_FAIL });
  });
});
