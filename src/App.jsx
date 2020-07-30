import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Container from './containers/Container'
import Header from './containers/Header'
import Main from './containers/Main'
import Page404 from './components/Page404'

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Container>
          <Header />
          {/* <Main /> */}
        </Container>
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  </Router>
)
