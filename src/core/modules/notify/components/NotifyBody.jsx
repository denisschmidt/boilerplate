import React from 'react';
import PropTypes from 'prop-types';

import StyledNotifyBody from '../styled/StyledNotifyBody';
import StyledNotifyTitle from '../styled/StyledNotifyTitle';
import StyledNotifyText from '../styled/StyledNotifyText';

const propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
};

const NotifyBody = ({ message, title }) => (
  <StyledNotifyBody>
    <StyledNotifyTitle>{title}</StyledNotifyTitle>
    <StyledNotifyText>{message}</StyledNotifyText>
  </StyledNotifyBody>
);

NotifyBody.propTypes = propTypes;

export default NotifyBody;
