import './BlogEntries.css'
import IPMI from '../../imgs/IPMI.jpg'
import MK from '../../imgs/Dibujo-SM.png'
import Context from '../../imgs/http3.jpg'
import Formik from '../../imgs/formik.png'

function BlogEntries(){
    
    return(
        <div className="container" id="BlogEntries">
            <div className="row justify-content-center">
                <div className="row col-sm-6 col-lg-6 col-12 ">
                    <article className="art col-sm-5 col-lg-5 col-12 mr-sm-5 mr-lg-5">
                        <a href="https://garsiv1932.github.io/HTTPCONTEXT/" className="text-decoration-none textlink">
                            <figure className="prevImage">
                                <a href="https://garsiv1932.github.io/HTTPCONTEXT/">
                                    <img src={Context}/>
                                </a>
                            </figure>
                            <p className="p-1 text-justify">
                                Programar en diferentes niveles hace que el trabajo sea mas prolijo, ordenado y eficiente.
                                Compartir variables de sesión en .NET Core requiere algunas 
                                configuraciones, pero tampoco es motivo para dejar 
                                de tenerle cariño a esta magnifica herramienta.
                            </p>
                        </a>    
                    </article>
    
                    <article className="art col-sm-5 col-lg-5 col-12 mt-sm-0 mt-lg-0 mt-4">
                        <a href="https://garsiv1932.github.io/formik/" className="text-decoration-none textlink">
                            <figure className="prevImage">
                                <img src={Formik}/>                                
                            </figure>
                            <p className="p-1 text-justify">
                                Formik es una librería declarativa, intuitiva y adaptable desarrollada por Jared Palmer. Es muy fácil de utilizar y, gracias a su reducido peso (tan solo 12.7 kB), es perfecta para nuestras aplicaciones.
                            </p>
                        </a>
                    </article>
                </div>
                <div className="row col-sm-6 col-lg-6 d-none d-sm-flex">
                    <article className="art col-sm-5 col-lg-5 mr-sm-5 mr-lg-5">
                        <a href="https://garsiv1932.github.io/nagios-ipmi/" className="text-decoration-none textlink">
                            <figure className="prevImage">
                                <img src={IPMI} />
                            </figure>
                            <p className="p-1 text-justify">
                                IPMI Es un gestor de interfaz que nos permite gestionar servidores con independencia de sistemas 
                                operativos y tipos de CPU. Entre otras cosas, nos permite recibir información certera sobre lo 
                                que pasa con el hardware de nuestro servidor.
                            </p>
                        </a>
                    </article>

                    <article className="art col-sm-5 col-lg-5">
                        <a href="https://garsiv1932.github.io/nagios-mikrotik-ssh/" className="text-decoration-none textlink">
                            <figure className="prevImage">
                                <img src={MK} />
                            </figure>
                            <p className="p-1 text-justify">
                                Para monitorear nuestros Mikrotik mediante SSH directamente desde nuestro 
                                servidor de monitoreo Nagios.Una solución sencilla y
                                úti para recibir alertas de nuestros Routers.
                            </p>
                        </a>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default BlogEntries;