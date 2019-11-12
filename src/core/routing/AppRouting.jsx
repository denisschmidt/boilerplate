import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { CORE_ROUTES } from './coreRoutes';

const AppRouting = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {CORE_ROUTES.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  </Suspense>
);

export default AppRouting;
