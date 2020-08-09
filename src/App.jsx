import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './containers/HomePage'
import Page404 from './components/Page404'

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  </Router>
)
