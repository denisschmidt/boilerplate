import React from 'react';
import { branch, compose, renderComponent } from 'recompose';
import { Router } from 'react-router-dom';
import appHistory from '../history/appHistory';
import AppContentComponent from './AppContentComponent';

const checkLoading = ({ isLoading }) => isLoading;

const AppComponent = ({ isLoggedIn }) => (
  <Router history={appHistory}>
    <AppContentComponent {...{ isLoggedIn }} />
  </Router>
);

const Loader = () => <div>Loading...</div>;

const enhance = compose(branch(checkLoading, renderComponent(Loader)));

export default enhance(AppComponent);
