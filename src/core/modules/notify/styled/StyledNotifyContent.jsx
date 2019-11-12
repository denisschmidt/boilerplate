import React from 'react';

import styled from 'styled-components';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { NOTIFY_TYPES } from '../constants/notifyConstants';

const SIZES = {
  small: '376px',
  large: '448px',
};

const StyledNotifyContent = styled(({ ...rest }) => (
  <SnackbarContent {...rest} classes={{ root: 'root', message: 'message', action: 'action' }} />
))`
  &.root {
    background-color: ${({ theme }) => theme.colors.white};
    border-left: 4px solid;
    align-items: flex-start;
    justify-content: space-between;
    padding: 6px 6px;
    width: ${({ size }) => SIZES[size] || SIZES.small};
    flex-wrap: nowrap;
    border-color: ${({ type, theme }) => (type === NOTIFY_TYPES.SUCCESS ? theme.colors.success : theme.colors.failure)};

    .message {
      padding: 16px 14px;
    }

    .action {
      padding: 0px;
      margin: 0px;
    }
  }
`;

export default StyledNotifyContent;
