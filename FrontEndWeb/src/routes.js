import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/main/main';
import CadastraPaciente from '../src/pages/create/index';
import DetalhePaciente from '../src/pages/show/index';
import ListaPaciente from '../src/pages/read/index';
import EditaPaciente from '../src/pages/update/index';
import DeletaPaciente from '../src/pages/delete';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/cadastra-paciente' exact component={CadastraPaciente} />
        <Route path='/lista-paciente' exact component={ListaPaciente} />
        <Route path='/detalhe-paciente/:id' exact component={DetalhePaciente} />
        <Route path='/edita-paciente' exact component={EditaPaciente} />
        <Route path='/edita-paciente/:id' exact component={EditaPaciente} />
        <Route path='/deleta-paciente/:id' exact component={DeletaPaciente} />
      </Switch>
    </BrowserRouter>
  )
}