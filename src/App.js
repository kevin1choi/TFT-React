
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Champions from "./pages/champions";
import Galaxies from "./pages/galaxies";
import Items from "./pages/items";

import Header from "./components/Header/header";

import NoMatch from "./pages/noMatch";

function App() {
    return (
        <Router>
            <div className="container-fluid">
                <Header/>
                <hr className="bg-dark mx-sm-5"></hr><br></br><br></br>

                <Switch>
                    <Route exact path={["/", "/about"]}>
                        <About/>
                    </Route>
                    <Route path="/champions">
                        <Champions/>
                    </Route>
                    <Route path="/galaxies">
                        <Galaxies/>
                    </Route>
                    <Route path="/items">
                        <Items/>
                    </Route>
                    <Route>
                        <NoMatch/>
                    </Route>
                </Switch>
                
            </div>
        </Router>
    );
}

export default App;