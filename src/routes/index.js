import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Estabelecimento from '../pages/Estabelecimento';
import EstabelecimentoEditar from '../pages/EstabelecimentoEditar';
import NearStores from '../pages/NearStores';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={Signup} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/estabelecimento/create" component={Estabelecimento} isPrivate />
      <Route path="/estabelecimento/edit/:id" component={EstabelecimentoEditar} isPrivate />
      <Route path="/near-stores" component={NearStores} isPrivate />
    </Switch>
  );
}
