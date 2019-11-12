import React from 'react';
import PropTypes from 'prop-types';

import StyledNotifyMessage from '../styled/StyledNotifyMessage';
import { NOTIFY_SIZES } from '../constants/notifyConstants';
import StyledMessageWrp from '../styled/StyledMessageWrp';
import NotifyBody from './NotifyBody';

const propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};

const NotifyMessage = ({ message, messageParams, title, type, size }) => {
  return (
    <StyledNotifyMessage>
      {size === NOTIFY_SIZES.SMALL ? (
        <StyledMessageWrp>{message}</StyledMessageWrp>
      ) : (
        <NotifyBody {...{ message, messageParams, title }} />
      )}
    </StyledNotifyMessage>
  );
};

NotifyMessage.propTypes = propTypes;

export default NotifyMessage;
