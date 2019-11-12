export const appSelector = state => state?.app;
export const getIsErrorAppSelector = state => appSelector(state)?.isError;
export const getIsLoadingAppSelector = state => appSelector(state)?.isLoading;
