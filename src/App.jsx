import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Page404 from './components/Page404'

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <h1>LIB.RE</h1>
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  </Router>
)
