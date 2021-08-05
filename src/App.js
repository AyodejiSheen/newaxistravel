import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
import { Hotel } from './view/hotel.';
import { Transport } from './view/transport';
import { Package } from './view/package';
import { Business } from './view/business';
import { Onestop } from './view/onestop';
import { Consult } from './view/consult';
import { Preview2 } from './view/preview2';
import { Preview3 } from './view/preview3';
import { Travelmg } from './view/travelmg';
import { Account } from './view/account';
import { Technology } from './view/technology';
import { Mobile } from './view/mobile';
import { Booking } from './view/booking';
import { Approval } from './view/approval';
import {Expenses} from './view/expenses';
import { Report } from './view/report';
import { Safety } from './view/safety';
import { Group } from './view/group';
import { Delegate } from './view/delegate';
import { Logistics } from './view/logistics';
import { Marine } from './view/marine';
import { Specialist } from './view/specialist';
import { Choose } from './view/choose';

function App() {

  useEffect(() => {
    Aos.init({duration:1000});
  }, []);

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

                    <Route exact path="/who-we-are">
                      
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


                    <Route exact path="/business-travel">
                      <Business/>
                      <Footer/>
                    </Route>


                    <Route exact path="/one-stop-travel">
                      <Onestop/>
                      <Footer/>
                    </Route>


                    <Route exact path="/consulting-services">
                      <Consult/>
                      <Footer/>
                    </Route>


                    <Route exact path="/travel-management">
                      <Travelmg/>
                      <Footer/>
                    </Route>


                    <Route exact path="/account-management">
                      <Account/>
                      <Footer/>
                    </Route>

                    <Route exact path="/travel-technology">
                      <Technology/>
                      <Footer/>
                    </Route>

                    <Route exact path="/mobile">
                      <Mobile/>
                      <Footer/>
                    </Route>

                    <Route exact path="/booking">
                      <Booking/>
                      <Footer/>
                    </Route>


                    <Route exact path="/approval">
                      <Approval/>
                      <Footer/>
                    </Route>

                    <Route exact path="/payments-expenses">
                      <Expenses/>
                      <Footer/>
                    </Route>


                    <Route exact path="/reporting-analytics">
                      <Report/>
                      <Footer/>
                    </Route>

                    <Route exact path="/safety-risks">
                      <Safety/>
                      <Footer/>
                    </Route>

                    <Route exact path="/group-travel">
                      <Group/>
                      <Footer/>
                    </Route>

                    <Route exact path="/delegate-management">
                      <Delegate/>
                      <Footer/>
                    </Route>

                    <Route exact path="/logistics-travel-essentials">
                      <Logistics/>
                      <Footer/>
                    </Route>

                    <Route exact path="/marine-offshore-travel">
                      <Marine/>
                      <Footer/>
                    </Route>

                    <Route exact path="/specialized-services">
                      <Specialist/>
                      <Footer/>
                    </Route>


                    <Route exact path="/why-choose-us">
                      <Choose/>
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


              <Route exact path="/abu-dubai-tour">
                
                <Preview/>
                <Footer/>
              </Route>

              <Route exact path="/camel-trekking-safari">
                
                <Preview2/>
                <Footer/>
              </Route>

              <Route exact path="/marina-dhow-cruise">
                
                <Preview3/>
                <Footer/>
              </Route>



              <Route exact path="/hotel">
                
                <Hotel/>
                <Footer/>
              </Route>


              <Route exact path="/transport">
                
                <Transport/>
                <Footer/>
              </Route>


              <Route exact path="/packages">
                
                <Package/>
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
