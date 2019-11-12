export const createUtilityDataSelectors = entityName => ({
  dataSelector: state => state?.utilityData?.[entityName]?.[entityName],
  isLoadingSelector: state => state?.utilityData?.[entityName]?.isLoading,
  isLoadedSelector: state => state?.utilityData?.[entityName]?.isLoaded,
  isErrorSelector: state => state?.utilityData?.[entityName]?.isError,
  offset: state => state?.utilityData?.[entityName]?.offset,
  limit: state => state?.utilityData?.[entityName]?.limit,
  count: state => state?.utilityData?.[entityName]?.count,
});
