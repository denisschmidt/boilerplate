import { DATA_ENTITIES } from '../constants/utilityDataConstants';
import { createUtilityDataSelectors } from '../utils/selectorUtils';

export const dateSelectors = createUtilityDataSelectors(DATA_ENTITIES.DATA);
