import React, {useState} from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Blog from "./pages/Blog/Blog";
import CV from "./pages/CV/CV";



import Navbar from './Components/Navbar/Navbar';


import './App.css';

import Footer from "./Components/Footer/Footer";
import {RadialMenu} from "./Components/RadialMenu/RadialMenu";

const App = () => {
  const [hideNavAndFooter, setHideNavAndFooter] = useState(false);



  
  return (

   <Router>

     <div className="overflow-hidden">
    <Navbar/>
     </div>
     
    <main>
      <OverlayScrollbarsComponent
          options={{ scrollbars: { autoHide: 'auto' } }}
          >
      <div style={{height: "100vh"}}>
      
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
        <Route exact path="/Login" component={({history}) => Login({history})}>
          <Login/>
        </Route>
        <Route exact path="/Dashboard" component = {({history}) => Dashboard({history})}>
          <Dashboard/>
        </Route>
      </Switch>
      <div className="btn-float" >
        <div className="btn-float-inner" >
      <RadialMenu/>
        </div>
      </div>
      {
        (!hideNavAndFooter)
            ?
            <Footer/>
            :
            null
      }

      </div>
      </OverlayScrollbarsComponent>
    </main>


 
  
   </Router>



  );
}

export default App;
