import React from "react";
import {withRouter} from 'react-router-dom';
import "./CV.css"

import approved from '../../imgs/approved.svg';

function CV({history}){
    const CV = process.env["REACT_APP_CV_URL"];

    return(
        <div>
            <div id="CV">
                <div className="container h-75">
                    <div className="justify-content-center">
                        <article className="row exp justify-content-center">
                            <div className="col-lg-1 col-3"/>
                            <div className="col-lg-3 text-center"/>
                            <p className="col-lg-3 text-center">
                                <h1>MI CV</h1>
                                <h4>Desarrollo Profesional</h4>
                            </p>
                            <div className="col-sm-10 col-10 col-lg-5 text-center"/>
                        </article>
                        <div className="col-12 text-center"/>
                    </div>
        
                    <div className="justify-content-center mt-5">
                        <article className="row exp justify-content-center">
                            <figure className="col-lg-1 col-3">
                                <img src={approved} className="img-fluid img-thumbnail icon"/>
                            </figure>
                            <p className="col-lg-3 text-center">
                              Septiembre de 2021 - {'\n'} 
                                a la fecha  
                            </p>
                            <p className="col-lg-3 text-center">
                                FULL STACK DEVELOPPER {"\n"} (GARINO)
                            </p>
                            <p className="col-sm-10 col-10 col-lg-5 text-center">
                                Responsable de desarrollar soluciones para el departamento de productos de la empresa.
                            </p>
                        </article>
                        <article className="row exp justify-content-center">
                            <figure className="col-lg-1 col-3">
                                <img src={approved} alt={"Experiencia"} className="img-fluid img-thumbnail icon"/>
                            </figure>
                            <p className="col-lg-3 text-center">
                                Marzo de 2020 - {'\n'} 
                                a la fecha
                            </p>
                            <p className="col-lg-3 text-center">
                                BACK END DEVELOPPER {"\n"} (CHEVACA)
                            </p>
                            <p className="col-sm-10 col-10 col-lg-5 text-center">
                                Responsable de desarrollar la interfaz administrativa y de gestión
                                del software de control del producto principal de la empresa.
                            </p>
                        </article>
                        <article className="row exp justify-content-center">
                            <figure className="col-lg-1 col-3">
                                <img src={approved} alt={"Experiencia"} className="img-fluid img-thumbnail icon"/>
                            </figure>
                            <p className="col-lg-3 text-center">
                                Noviembre de 2010 - {'\n'}
                                Septiembre de 2021
                            </p>
                            <p className="col-lg-3 text-center">
                                TECNICO REGIONAL {'\n'} (AFP)
                            </p>
                            <p className="col-sm-10 col-10 col-lg-5 text-center">
                                Responsable por los servidores de clientes a nivel regional, así como 
                                tareas técnicas en coberturas y eventos.
                            </p>
                        </article>
                    </div>
                    
                    <div className="justify-content-center mt-lg-3 mt-5">
                        <article className="row exp justify-content-center">
                            <div className="col-lg-1 col-3"/>
                            <div className="col-lg-3 text-center"/>
                            <div className="col-lg-3 text-center link">
                                <a data-testid="linkElement"
                                   href={CV}
                                   target="_blank" rel="nofollow noopener" className="linkStyle"><span className="spanStyle"><span>CV Completo</span></span></a>                                </div>
                            <div className="col-sm-10 col-10 col-lg-5 text-center"/>
                        </article>
                        <div className="col-12 text-center"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default withRouter(CV);
