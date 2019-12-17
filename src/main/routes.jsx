import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PageOneBeer from '../components/pages/pageOneBeer'
import PageBeers from '../components/pages/pageBeers'

export default props => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={PageBeers}></Route>
      <Route path="/beer/:id" exact={true} component={PageOneBeer}></Route>
    </Switch>
  </BrowserRouter>

)