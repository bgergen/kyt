import React from 'react';
import { hot } from 'react-hot-loader/root';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import routes from '../routes';

// We need a Root component for React Hot Loading.
function Root() {
  return <Router history={browserHistory} routes={routes} />;
}

export default hot(Root);
