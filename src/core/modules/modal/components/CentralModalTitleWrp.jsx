import React from 'react';

import StyledModalTitleWrp from '../styled/StyledModalTitleWrp';
import CentralModalTitle from './CentralModalTitle';

const CentralModalTitleWrp = props => (
  <StyledModalTitleWrp>
    <CentralModalTitle {...props} />
  </StyledModalTitleWrp>
);

export default CentralModalTitleWrp;
