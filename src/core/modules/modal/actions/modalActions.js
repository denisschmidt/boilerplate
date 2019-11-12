import { CLOSE_CENTRAL_MODAL, OPEN_CENTRAL_MODAL } from '../constants/modalConstants';

export const openCentralModal = ({ modalId, params = {} }) => ({
  type: OPEN_CENTRAL_MODAL,
  payload: { modalId, params },
});

export const closeCentralModal = () => ({
  type: CLOSE_CENTRAL_MODAL,
});
