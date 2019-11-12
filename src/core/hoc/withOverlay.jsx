import React from 'react';
import StyledOverlay from '../components/overlay/styled/StyledOverlay';


export const withOverlay = Component => ({ showOverlay, ...rest }) => {
  return (
    <StyledOverlay {...{ showOverlay }}>
      <Component { ...rest } />
    </StyledOverlay>
  );
};

