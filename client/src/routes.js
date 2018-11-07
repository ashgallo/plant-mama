import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import DisplayCards from './plant_gallery/DisplayCards';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/gallery' component={DisplayCards} />
  </Switch>
)

export default Routes;