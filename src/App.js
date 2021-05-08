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

                    <Route exact path="*">
                      <Navbar/>
                      <Errorpage/>
                    </Route>
                </Switch>
            </Router>
    </>
  );
}

export default App;
