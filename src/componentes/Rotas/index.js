import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Exercicio1 from '../Desafios/1/';
import Exercicio2 from '../Desafios/2/';
import Exercicio3 from '../Desafios/3/';
import Exercicio4 from '../Desafios/4/';
import Exercicio5 from '../Desafios/5/';
import Exercicio6 from '../Desafios/6/';
import Exercicio7 from '../Desafios/7/';
import EstruturaPagina from '../EstruturaPagina';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ EstruturaPagina } />
            <Route path='/exercicio-1' component={ Exercicio1 } />
            <Route path='/exercicio-2' component={ Exercicio2 } />
            <Route path='/exercicio-3' component={ Exercicio3 } />
            <Route path='/exercicio-4' component={ Exercicio4 } />
            <Route path='/exercicio-5' component={ Exercicio5 } />
            <Route path='/exercicio-6' component={ Exercicio6 } />
            <Route path='/exercicio-7' component={ Exercicio7 } />
        </Switch>
    </BrowserRouter>
);

export default Rotas;