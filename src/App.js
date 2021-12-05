import React, {useState} from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import './App.css';

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
import Gallery from "./pages/Gallery/Gallery"
import Page404 from "./pages/Page404/Page404";


import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import {RadialMenu} from "./Components/RadialMenu/RadialMenu";


const App = () => {
  const [hideNavAndFooter, setHideNavAndFooter] = useState(false);

  return (
   <Router>
     <div className="overflow-hidden ui fixed inverted" >
       <Navbar/>
     </div>
     
    <main id="main" style={{paddingTop: "68px"}} >
      <OverlayScrollbarsComponent
          // options={{ scrollbars: { autoHide: 'scroll' } }}
          >
      <div className="override" style={{height: "93vh" }}>
      
      <Switch>
        <Redirect redirect exact from="/" to="/Home"/>
        <Route path="/Home" component={({history}) => Home({history})}>
          <Home/>
        </Route>
        <Route exact path="/CV" component={({history}) => CV({history})}>
          <CV/>
        </Route>
        <Route exact path="/Blog" component={({history}) => Blog({history, setHideNavAndFooter})}/>
        
        <Route exact path="/Login" component={({history}) => Login({history})}>
          <Login/>
        </Route>
        <Route exact path="/Gallery" component={({history}) => Gallery({history, setHideNavAndFooter})} />
        
        <Route exact path="/Dashboard" component = {({history}) => Dashboard({history})}>
          <Dashboard/>
        </Route>
        <Route exact component={({history}) => Page404({history, setHideNavAndFooter})} />
      </Switch>
        <div className="btn-float-inner" >
          <RadialMenu/>
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
