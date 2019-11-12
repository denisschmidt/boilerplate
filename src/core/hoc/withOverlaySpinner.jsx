import React from 'react';
import Spinner from '../components/spinner/Spinner';

export const withOverlaySpinner = spinnerProps => Component => ({ isLoading, ...rest }) => (
  <Spinner isLoading={isLoading} {...spinnerProps}>
    <Component isLoading={isLoading} {...rest} />
  </Spinner>
);
