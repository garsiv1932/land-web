import React, {useState} from "react";
import HttpsRedirect from 'react-https-redirect';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom'

import BarNav from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Blog from './components/Blog/Blog';
import Page404 from './components/Page404/Page404';
import CV from "./components/CV/CV";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';





// const anonImage="/images/anonImage.jpg";

function App() {
    const [hideNavAndFooter, setHideNavAndFooter] = useState(false);
  return (
          <HttpsRedirect>
            <div className="App" id="outer-container">
            <BrowserRouter>
                {
                    (!hideNavAndFooter)
                        ?
                        <BarNav pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                        : 
                        null
                }
    
                <Switch>
                    <Redirect redirect exact from="/" to="/Home"/>
                    <Route path="/Home" component={({history}) => Home({history})}/>
                    {/*<div id="page-wrap">*/}
                        <Route exact path="/Blog" component={({history}) => Blog({history})}/>
                        <Route exact path="/CV" component={({history}) => CV({history})}/>
                        <Route exact component={({history}) => Page404({history, setHideNavAndFooter})} />
                    {/*</div>*/}
                </Switch>
                {
                    (!hideNavAndFooter)
                        ?
                        <Footer/>
                        :
                        null
                }
                
            </BrowserRouter>
        </div>
      </HttpsRedirect>
  );
}

export default App;
