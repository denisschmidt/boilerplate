import React from 'react';
import StyledModalWrp from '../styled/StyledModalWrp';
import CentralModalTitleContainer from '../containers/CentralModalTitleContainer';

const ModalExample = () => (
  <StyledModalWrp widthSize="smedium">
    <CentralModalTitleContainer title="Modal" description="Modal Desc" />
  </StyledModalWrp>
);

export default ModalExample;
