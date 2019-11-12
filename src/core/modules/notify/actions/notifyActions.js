import { CLOSE_NOTIFY, OPEN_NOTIFY } from '../constants/notifyConstants';

export const openNotify = payload => ({
  type: OPEN_NOTIFY,
  payload,
});

export const closeNotify = () => ({
  type: CLOSE_NOTIFY,
});
