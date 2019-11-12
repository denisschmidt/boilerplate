import { OPEN_LEFT_PANEL, CLOSE_LEFT_PANEL, CLOSE_RIGHT_PANEL, OPEN_RIGHT_PANEL } from '../constants/uiConstants';

export const closeLeftPanel = () => ({ type: CLOSE_LEFT_PANEL });
export const openLeftPanel = () => ({ type: OPEN_LEFT_PANEL });
export const openRightPanel = () => ({ type: OPEN_RIGHT_PANEL });
export const closeRightPanel = () => ({ type: CLOSE_RIGHT_PANEL });
