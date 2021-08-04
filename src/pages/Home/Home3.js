import {withRouter} from 'react-router-dom'
import React from "react";

import Images from "../Images/Images";
import Phrase from "../Phrase/Phrase";
import Contact from "../Contact/Contact";
import BlogEntries from "../BlogEntries/BlogEntries";
import nerd from '../../imgs/nerd/favicon.ico';

import { Helmet } from 'react-helmet';


import './Home.css'
import ProyectosEntries from "../ProyectosEntries/ProyectosEntries";


function Home({history}){
    return(
        <>
            <div>
                <div className="parallax">
                
                </div>
                <section>
                    <Images/>
                </section>
                <section>
                    <Phrase/>
                </section>
                <section>
                    <Contact/>
                </section>
                {/*<section>*/}
                {/*    <BlogEntries/>*/}
                {/*</section>*/}
                <section>
                    <ProyectosEntries/>
                </section>
            </div>    
        </>
    )
}

export default withRouter(Home) ;