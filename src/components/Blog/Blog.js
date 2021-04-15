import React from "react";
import {withRouter} from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import IPMI from '../../imgs/IPMI.jpg'
import MK from '../../imgs/Dibujo.jpg';
import Context from '../../imgs/http3.jpg'
import Formik from '../../imgs/formik.png'
import P from '../../imgs/Icons/P.png'


import "./Blog.css"

function Blog({history}){
    return(
        <div>
            <div id="Blog" className="container-fluid">
                <div className="row justify-content-center pt-5">
                    <div className="col-sm-8 col-lg-8 col-12 test">
                        <div className="row testheight">
                            <div className="col-sm-6 col-lg-6 col-12 testright p-0">
                                <a href="https://garsiv1932.github.io/HTTPCONTEXT/">
                                    <img src={Context}></img>
                                </a>
                            </div>
    
                            <div className="col-sm-6 col-lg-6 col-12 d-flex flex-column">
                                <div className="row h-100">
                                    <div id="caja-superior" className="col-sm-8 pt-sm-5 pt-lg-5 d-block pl-5">
                                        <div className="row">
                                            <div className="col-sm-3 col-lg-2 col-2 d-flex align-items-center">
                                                <img src={P} className="h-75 rounded" alt="new"/>
                                            </div>
                                            <div className="col-9">
                                                <div className="row">
                                                    <div id="Nombre" className="col-12 p-0 m-0">
                                                        <span><small>Pablo Llorach</small></span>
                                                    </div>
                                                    <div id="fecha" className="col-12 p-0 m-0">
                                                        <span><small>27/3/2021</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-sm-2 mt-lg-2 p-0 titulo">
                                            <a href="https://garsiv1932.github.io/HTTPCONTEXT/" className="nolink">
                                                <span>Compartir elementos con HTTP Context</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-end">
                                    <div className="col-12 pl-5 pr-5 pb-3">
                                        <div className="justify-content-center border-top border-dark footerbl">
                                            <span> 0 visitas</span>
                                            <span> 0 comentarios</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row justify-content-center pt-5">
                    <div className="col-sm-8 col-lg-8 col-12 test">
                        <div className="row testheight">
                            <div className="col-sm-6 col-lg-6 col-12 testright p-0">
                                <a href="https://garsiv1932.github.io/formik/">
                                    <img src={Formik}></img>
                                </a>
                            </div>
    
                            <div className="col-sm-6 col-lg-6 col-12 d-flex flex-column">
                                <div className="row h-100">
                                    <div id="caja-superior" className="col-sm-8 pt-sm-5 pt-lg-5 d-block pl-5">
                                        <div className="row">
                                            <div className="col-sm-3 col-lg-2 col-2 d-flex align-items-center">
                                                <img src={P} className="h-75 rounded" alt="new"/>
                                            </div>
                                            <div className="col-9">
                                                <div className="row">
                                                    <div id="Nombre" className="col-12 p-0 m-0">
                                                        <span><small>Pablo Llorach</small></span>
                                                    </div>
                                                    <div id="fecha" className="col-12 p-0 m-0">
                                                        <span><small>27/3/2021</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-sm-2 mt-lg-2 p-0 titulo">
                                            <a href="https://garsiv1932.github.io/formik/" className="nolink">
                                                <span>Creando Formularios con Formik</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-end">
                                    <div className="col-12 pl-5 pr-5 pb-3">
                                        <div className="justify-content-center border-top border-dark footerbl">
                                            <span> 0 visitas</span>
                                            <span> 0 comentarios</span>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row justify-content-center pt-5">
                    <div className="col-sm-8 col-lg-8 col-12 test">
                        <div className="row testheight">
                            <div className="col-sm-6 col-lg-6 col-12 testright p-0">
                                <a href="https://garsiv1932.github.io/nagios-mikrotik-ssh/" className="nolink">
                                    <img src={MK}></img>
                                </a>
                            </div>
    
                            <div className="col-sm-6 col-lg-6 col-12 d-flex flex-column">
                                <div className="row h-100">
                                    <div id="caja-superior" className="col-sm-8 pt-sm-5 pt-lg-5 d-block pl-5">
                                        <div className="row">
                                            <div className="col-sm-3 col-lg-2 col-2 d-flex align-items-center">
                                                <img src={P} className="h-75 rounded" alt="new"/>
                                            </div>
                                            <div className="col-9">
                                                <div className="row">
                                                    <div id="Nombre" className="col-12 p-0 m-0">
                                                        <span><small>Pablo Llorach</small></span>
                                                    </div>
                                                    <div id="fecha" className="col-12 p-0 m-0">
                                                        <span><small>27/3/2021</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-sm-2 mt-lg-2 p-0 titulo">
                                            <a href="https://garsiv1932.github.io/nagios-mikrotik-ssh/" className="nolink">
                                                <span>
                                                Alertas de tus Mikrotiks en Nagios
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-end">
                                    <div className="col-12 pl-5 pr-5 pb-3">
                                        <div className="justify-content-center border-top border-dark footerbl">
                                            <span> 0 visitas</span>
                                            <span> 0 comentarios</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row justify-content-center pt-5">
                    <div className="col-sm-8 col-lg-8 col-12 test">
                        <div className="row testheight">
                            <div className="col-sm-6 col-lg-6 col-12 testright p-0">
                                <a href="https://garsiv1932.github.io/nagios-ipmi/">
                                    <img src={IPMI}></img>
                                </a>
                            </div>
    
                            <div className="col-sm-6 col-lg-6 col-12 d-flex flex-column">
                                <div className="row h-100">
                                    <div id="caja-superior" className="col-sm-8 d-block pt-sm-5 pt-lg-5 pl-5">
                                        <div className="row">
                                            <div className="col-sm-3 col-lg-2 col-2 d-flex align-items-center">
                                                <img src={P} className="h-75 rounded" alt="new"/>
                                            </div>
                                            <div className="col-9">
                                                <div className="row">
                                                    <div id="Nombre" className="col-12 p-0 m-0">
                                                        <span><small>Pablo Llorach</small></span>
                                                    </div>
                                                    <div id="fecha" className="col-12 p-0 m-0">
                                                        <span><small>27/3/2021</small></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-sm-2 mt-lg-2 p-0 titulo">
                                            <a href="https://garsiv1932.github.io/nagios-ipmi/" className="nolink">
                                                <span>
                                                    Alertas del Hardware de tu server mediante IPMI                                                    
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-end">
                                    <div className="col-12 pl-5 pr-5 pb-3">
                                        <div className="justify-content-center border-top border-dark footerbl">
                                            <span key="sp1"> 0 visitas</span>
                                            <span key="sp2"> 0 comentarios</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default withRouter(Blog);