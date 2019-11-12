import React from 'react';
import PropTypes from 'prop-types';
import { compose, setPropTypes } from 'recompose';
import Snackbar from '@material-ui/core/Snackbar';

import StyledNotifyContent from '../styled/StyledNotifyContent';
import NotifyMessage from './NotifyMessage';
import NotifyActions from './NotifyActions';
import { NOTIFY_DELAY } from '../constants/notifyConstants';

const propTypes = {
  isOpen: PropTypes.bool,
  closeNotify: PropTypes.func,
  message: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
};

const Notify = ({ isOpen, closeNotify, message, messageParams, title, type, size }) => (
  <Snackbar
    open={isOpen}
    onClose={closeNotify}
    autoHideDuration={NOTIFY_DELAY}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}>
    <StyledNotifyContent
      message={<NotifyMessage {...{ message, messageParams, title, type, size }} />}
      action={<NotifyActions closeNotify={closeNotify} />}
      type={type}
      size={size}
    />
  </Snackbar>
);

const enhance = compose(setPropTypes(propTypes));

export default enhance(Notify);
