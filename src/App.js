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
import { Philosophy } from './view/philosophy';
import { Terms } from './view/terms';
import { Privacy } from './view/privacy';
import { Flight } from './view/flight';
import { Visas } from './view/visas';
import ScrollToTop from './view/scrollToTop';
import { Insurance } from './view/insurance';
import { Tour } from './view/tour';
import { Preview } from './view/preview';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
              <Navbar/>
                <Switch>
                    <Route exact path="/">
                 
                      <Homepage/>
                      <Footer/>
                    </Route>

                    <Route exact path="/contact-us">
                     
                        <Contact/>
                        <Footer/> 
                    </Route>

                    <Route exact path="/corporate-travel">
                       
                        <Corporate/>
                        <Footer/>
                    </Route>

                    <Route exact path="/meetings-and-events">
                      
                      <Mice/>
                      <Footer/>
                    </Route>

                    <Route exact path="/leisure-travel">
                    
                      <Leisure/>
                      <Footer/>
                    </Route>

                    <Route exact path="/our-company">
                      
                      <Ourcompany/>
                      <Footer/>
                    </Route>

                    <Route exact path="/our-philosophy">
                     
                      <Philosophy/>
                      <Footer/>
                    </Route>


                    <Route exact path="/terms-and-conditions">
                    
                      <Terms/>
                      <Footer/>
                    </Route>

                    <Route exact path="/privacy-policy">
                     
                      <Privacy/>
                      <Footer/>
                    </Route>




{/* Services Pages */}


                  <Route exact path="/visas-and-passport">
                     
                     <Visas/>
                     <Footer/>
                   </Route>

                  <Route exact path="/flight">
                
                    <Flight/>
                    <Footer/>
                  </Route>


                <Route exact path="/insurance">
                
                <Insurance/>
                <Footer/>
              </Route>



              <Route exact path="/tour">
                
                <Tour/>
                <Footer/>
              </Route>


              <Route exact path="/bangkok-tour">
                
                <Preview/>
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
