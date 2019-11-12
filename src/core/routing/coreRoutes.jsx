import React from 'react';

import { CORE_PATH } from './routingConstants';

const HomePage = React.lazy(() => import('../../modules/home/HomePage'));

export const CORE_ROUTES = [
  {
    path: CORE_PATH,
    component: HomePage,
    exact: true,
  },
];
