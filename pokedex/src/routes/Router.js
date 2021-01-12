import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import DetailsPage from '../pages/details/DetailsPage';
import Home from '../pages/home/Home';
import Pokedex from '../pages/pokedex/Pokedex';
import Erro from '../pages/erro/Erro';
import Footer from '../components/footer/Footer';



const Router = () => {
    return (
        <main>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'}>
                        <Home />
                    </Route>
                    <Route exact path={'/pokedex'}>
                        <Pokedex />
                    </Route>
                    <Route exact path={'/details/:name'}>
                        <DetailsPage />
                    </Route>
                    <Route >
                        <Erro />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </main>
    )
}
export default Router;