import React from "react";

import './Images.css';

import servers from './imgs/1366_2000.jpg';
import console from './imgs/1548599599322.jpeg';
import code from './imgs/pexels-photo-54681920200414.jpeg';
import univ from './imgs/ort.jpg';
import tenor from './imgs/tenor.gif';

function Images(){
    
    return(
        <section className="container-fluid mt-5 mb-5">
            <div className="row">
                <div className="col-sm-9 col-lg-9 col-12">
                    <img src={console} className="img-fluid"/>
                </div>
                
                <div className="d-none d-sm-block col-sm-3 col-lg-3 ctr">
                    <img src={univ}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm-9 col-lg-9 col-12">
                    <div className="row">
                        <div className="col-sm-6 col-lg-6 col-6 ctr">
                            <img src={code}/>
                        </div>
                        <div className="col-sm-6 col-lg-6 col-6">
                            <img src={servers}/>
                        </div>
                    </div>
                </div>
                <div className="d-none d-sm-block col-sm-3 col-lg-3 ">
                    <div className="row">
                        <div className="col-12 ctr">
                            <img src={tenor} className="img-fluid"/>
                        </div>

                    </div>
                </div>


            </div>
        </section>         
    )
}

export default Images;