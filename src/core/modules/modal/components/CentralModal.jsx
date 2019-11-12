import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';

import CentralModalContent from './CentralModalContent';
import StyledDialog from '../styled/StyledDialog';

const propTypes = {
  isOpen: PropTypes.bool,
  disableBackdropClick: PropTypes.bool,
  closeModal: PropTypes.func,
  onBackdropClick: PropTypes.func,
  modalId: PropTypes.string,
};

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CentralModal = ({ isOpen, closeModal, onBackdropClick, disableBackdropClick, modalId, params }) => (
  <StyledDialog
    scroll="body"
    open={isOpen}
    TransitionComponent={Transition}
    onClose={closeModal}
    disableBackdropClick={disableBackdropClick}
    onBackdropClick={onBackdropClick}>
    <CentralModalContent {...{ modalId, params }} />
  </StyledDialog>
);

CentralModal.propTypes = propTypes;

export default CentralModal;
