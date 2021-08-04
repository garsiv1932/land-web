import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';

//
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap';

import './App.css';
import Blog from "./pages/Blog/Blog";
import CV from "./pages/CV/CV";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [hideNavAndFooter, setHideNavAndFooter] = useState(false);
  
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Redirect redirect exact from="/" to="/Home"/>
        <Route path="/Home" component={({history}) => Home({history})}>
          <Home/>
        </Route>
        <Route exact path="/CV" component={({history}) => CV({history})}>
          <CV/>
        </Route>
        <Route exact path="/Blog" component={({history}) => Blog({history})}>
          <Blog/>
        </Route>
      </Switch>
      {
        (!hideNavAndFooter)
            ?
            <Footer/>
            :
            null
      }
    </main>
   </Router>
  );
}

export default App;
