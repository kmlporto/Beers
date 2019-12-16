import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Beers from '../components/pages/beers'

export default props => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Beers}></Route>
    </Switch>
  </BrowserRouter>

)