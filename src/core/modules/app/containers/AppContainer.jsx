import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { initAppStart } from '../actions/appActions';
import AppComponent from '../components/AppComponent';
import { getIsErrorAppSelector, getIsLoadingAppSelector } from '../selectors/appSelectors';

const mapStateToProps = state => ({
  isLoading: getIsLoadingAppSelector(state),
  isError: getIsErrorAppSelector(state),
});

const mapDispatchToProps = {
  initApp: initAppStart,
};

const AppContainer = ({ initApp, ...restProps }) => {
  useEffect(() => {
    initApp();
  }, []);

  return <AppComponent {...restProps} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
