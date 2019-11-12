export const getNotifyState = state => state?.notify;

export const getIsOpenNotify = state => getNotifyState(state)?.isOpen;
export const getNotifyMessage = state => getNotifyState(state)?.message;
export const getNotifyMessageParams = state => getNotifyState(state)?.messageParams;
export const getNotifyTitle = state => getNotifyState(state)?.title;
export const getNotifyType = state => getNotifyState(state)?.type;
export const getNotifySize = state => getNotifyState(state)?.size;
