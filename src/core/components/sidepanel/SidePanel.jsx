import React from 'react';

import StyledSidePanelWrp from './styled/StyledSidePanelWrp';
import SidePanelCollapsedBtn from '../layout/styled/SidePanelCollapsedBtn';
import StyledSIdePanelContentWrp from './styled/StyledSIdePanelContentWrp';

const SidePanel = ({ children, closePanel, openPanel, isOpenPanel, direction }) => {
  const handleClick = () => {
    if (isOpenPanel) closePanel();
    else openPanel();
  };

  return (
    <StyledSidePanelWrp {...{ isOpen: isOpenPanel, direction }}>
      <SidePanelCollapsedBtn {...{ isOpen: isOpenPanel, onClick: handleClick, direction }} />
      {isOpenPanel ? <StyledSIdePanelContentWrp>{children}</StyledSIdePanelContentWrp> : null}
    </StyledSidePanelWrp>
  );
};

export default SidePanel;
