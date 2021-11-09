import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import {Home} from "./components/Home.js"
import {Contacts} from "./components/Contacts"
import {ForDoctors} from "./components/ForDoctors"
import {OurSpecialists} from "./components/OurSpecialists"
import {Services} from "./components/Services"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App() {
  return(
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/for_doctors" component={ForDoctors}></Route>
          <Route path="/our_specialists" component={OurSpecialists}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/contacts" component={Contacts}></Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}


export default App;
