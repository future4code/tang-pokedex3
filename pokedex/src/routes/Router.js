import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailsPage from '../pages/details/DetailsPage';
import Home from '../pages/home/Home';
import Pokedex from '../pages/pokedex/Pokedex';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <Home />
                </Route>
                <Route exact path={'/pokedex'}>
                    <Pokedex />
                </Route>
                <Route exact path={'/details'}>
                    <DetailsPage />
                </Route>
                <Route exact path={'/details'}>
                    <div> ERRO</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;