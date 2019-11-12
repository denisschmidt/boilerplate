import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../styling/GlobalStyle';
import CentralModalContainer from '../modal/containers/CentralModalContainer';
import AppContainer from './containers/AppContainer';
import NotifyContainer from '../notify/containers/NotifyContainer';
import { theme } from '../../theme/theme';

const HotApp = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <CentralModalContainer disableBackdropClick />
      <NotifyContainer />
      <AppContainer />
    </Fragment>
  </ThemeProvider>
);

export default hot(module)(HotApp);
