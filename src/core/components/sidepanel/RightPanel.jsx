import React from 'react';
import { branch, renderNothing, compose, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';
import { Close } from 'styled-icons/material';

import StyledRightPanelWrp from './styled/StyledRightPanelWrp';
import StyledSidePanelCloseBtn from './styled/StyledSidePanelCloseBtn';

const propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
};

const checkIsOpen = ({ isOpen }) => !isOpen;

const RightPanel = ({ children, onClose }) => {
  return (
    <StyledRightPanelWrp>
      <StyledSidePanelCloseBtn onClick={onClose}>
        <Close size="16px" />
      </StyledSidePanelCloseBtn>
      {children}
    </StyledRightPanelWrp>
  );
};

const enhance = compose(
  setPropTypes(propTypes),
  branch(checkIsOpen, renderNothing),
);

export default enhance(RightPanel);
