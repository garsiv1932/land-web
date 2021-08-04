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
                        <article className="col-12 text-center">
                            <h1>MI CV</h1>
                            <h4>Desarrollo Profesional</h4>
                        </article>
                    </div>
        
                    <div className="justify-content-center mt-5">
                        <article className="row exp justify-content-center">
                            <figure className="col-lg-1 col-3">
                                <img src={approved} className="img-fluid img-thumbnail icon"/>
                            </figure>
                            <p className="col-lg-3 text-center">
                              Marzo de 2020 - a la fecha  
                            </p>
                            <p className="col-lg-3 text-center">
                                BACK END DEVELOPPER {"\n"} (CHEVACA)
                            </p>
                            <p className="col-sm-10 col-10 col-lg-5 text-center">
                                Responsable de desarrollar la interfaz administrativa y de gestión 
                                del software de control del producto principal de la empresa. 
                                Tecnologías utilizadas: .NET CORE MVC.
                            </p>
                        </article>
                        <article className="row exp justify-content-center">
                            <figure className="col-lg-1 col-3">
                                <img src={approved} alt={"Experiencia"} className="img-fluid img-thumbnail icon"/>
                            </figure>
                            <p className="col-lg-3 text-center">
                                Noviembre de 2016 - a la fecha
                            </p>
                            <p className="col-lg-3 text-center">
                                ENCARGADO
                                DE SISTEMAS{'\n'}
                                (EVENTUALES S.A)
                            </p>
                            <p className="col-sm-10 col-10 col-lg-5 text-center">
                                "Responsable por el soporte de los servidores y redes de la empresa."
                            </p>
                        </article>
                        <article className="row exp justify-content-center">
                            <figure className="col-lg-1 col-3">
                                <img src={approved} alt={"Experiencia"} className="img-fluid img-thumbnail icon"/>
                            </figure>
                            <p className="col-lg-3 text-center">
                                Noviembre de 2010 - a la fecha
                            </p>
                            <p className="col-lg-3 text-center">
                                TECNICO REGIONAL {'\n'} (AFP)
                                
                            </p>
                            <p className="col-sm-10 col-10 col-lg-5 text-center">
                                Responsable por el mantenimiento de los equipos informáticos y
                                servidores de clientes a nivel regional, así como 
                                tareas técnicas en coberturas y eventos.
                            </p>
                        </article>
                    </div>
                    <div className="justify-content-center mt-lg-3 mt-5">
                        <article className="row exp justify-content-center">
                            <p className="link" >
                                <a data-testid="linkElement"
                                   href={CV}
                                   target="_blank" rel="nofollow noopener" className="linkStyle"><span className="spanStyle"><span>CV Completo</span></span></a>
                            </p>
                        </article>
                    </div>
                </div>
                {/*<div className="container h-25 p-lg-5">*/}
                {/*    <div className="justify-content-center">*/}
                {/*        <p className="link">*/}
                {/*            <a data-testid="linkElement"*/}
                {/*               href={CV}*/}
                {/*               target="_blank" rel="nofollow noopener" className="linkStyle"><span className="spanStyle"><span>CV Completo</span></span></a>*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>

    )
}

export default withRouter(CV);
