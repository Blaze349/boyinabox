import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import HomeComponent from './components/HomeComponent.js'
import NinaComponent from './components/NinaComponent.js'
import PokemonComponent from './components/PokemonComponent.js'
import ChipComponent from './components/ChipComponent.js'
import EthanComponent from './components/EthanComponent.js'
import CoxComponent from './components/CoxComponent.js'

function App() {
    return (
        <Router>
            <div className="container">
                <h1 className="fnt-jetbrains is-size-6 has-text-centered mt-3 pt-1"> BENNY AJAERO - PORTFOLIO </h1>
                <Switch> 
                    <Route exact path="/">
                        <HomeComponent/>
                    </Route>
                    <Route path="/georgia">
                        <NinaComponent/>
                    </Route>
                    <Route path="/pokemon">
                        <PokemonComponent />
                    </Route>
                    <Route path="/chip">
                        <ChipComponent />
                    </Route>
                    <Route path="/ethan">
                        <EthanComponent />
                    </Route>
                    <Route path="/cox">
                        <CoxComponent />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
