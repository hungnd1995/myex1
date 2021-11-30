/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import HomePage from '../HomePage/index';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import userDetails from '../HomePage/components/userDetails';
import GlobalStyle from '../../global-styles';
import userEdit from '../HomePage/components/userEdit';
import Addnew from '../HomePage/components/Addnew';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/addNew" component={Addnew} />

        <Route exact path="/userDetails" component={userDetails} />
        <Route exact path="/userEdit" component={userEdit} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
