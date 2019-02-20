import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home'
import Login from '../views/Login';
import Signup from '../views/Signup';
import Note from '../components/Note';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/notes/:noteId" component={Note} />
  </Switch>
);

export default Routes;
