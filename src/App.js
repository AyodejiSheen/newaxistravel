import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

// components
import {Navbar} from './components/navbar';
import {Homepage} from './view/homepage';
import {Errorpage} from './view/errorpage';
import {Footer} from './components/footer';
import {Contact} from './view/contact';
import {Corporate} from './view/corporate';
import { Mice } from './view/mice';
import { Leisure } from './view/leisure';
import { Ourcompany } from './view/ourcomany';

function App() {
  return (
    <>
      <Router>
                <Switch>
                    <Route exact path="/">
                      <Navbar/>
                      <Homepage/>
                      <Footer/>
                    </Route>

                    <Route exact path="/contact-us">
                        <Navbar/>
                        <Contact/>
                        <Footer/>
                    </Route>

                    <Route exact path="/corporate-travel">
                        <Navbar/>
                        <Corporate/>
                        <Footer/>
                    </Route>

                    <Route exact path="/meetings-and-events">
                      <Navbar/>
                      <Mice/>
                      <Footer/>
                    </Route>

                    <Route exact path="/leisure-travel">
                      <Navbar/>
                      <Leisure/>
                      <Footer/>
                    </Route>

                    <Route exact path="/our-company">
                      <Navbar/>
                      <Ourcompany/>
                      <Footer/>
                    </Route>



                    <Route exact path="*">

                      <Errorpage/>
                    </Route>
                </Switch>
            </Router>
    </>
  );
}

export default App;
