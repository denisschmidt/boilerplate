import React from 'react';
import PropTypes from 'prop-types';

import StyledIconBtn from '../../../components/button/styled/StyledIconBtn';

const propTypes = {
  closeNotify: PropTypes.func,
};

const NotifyActions = ({ closeNotify }) => <StyledIconBtn onClick={closeNotify}>Close</StyledIconBtn>;

NotifyActions.propTypes = propTypes;

export default NotifyActions;
