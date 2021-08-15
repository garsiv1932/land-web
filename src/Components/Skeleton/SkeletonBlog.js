import Skeleton from 'react-loading-skeleton'
import React from "react";

const SkeletonBlog = () =>{
    const test = [0,1,2];
return(
    <div>
        <div id="Blog" className="container-fluid">
            {test.map((art) => (
                <div className="row justify-content-center pt-5" key={art}>
                    <div className="col-sm-8 col-lg-8 col-12 test">
                        <div className="row testheight">
                            <div className="col-sm-6 col-lg-6 col-12 testright p-0">
                                <a>
                                    <Skeleton/>
                                </a>
                            </div>

                            <div className="col-sm-6 col-lg-6 col-12 d-flex flex-column">
                                <div className="row h-100">
                                    <div id="caja-superior" className="col-sm-8 pt-sm-5 pt-lg-5 d-block pl-5">
                                        <div className="row">
                                            <div className="col-sm-3 col-lg-2 col-2 d-flex align-items-center">
                                                <img className="h-75 rounded"/>
                                            </div>
                                            <div className="col-9">
                                                <div className="row">
                                                    <div id="Nombre" className="col-12 p-0 m-0">
                                                        <span><small><Skeleton/></small></span>
                                                    </div>
                                                    <div id="fecha" className="col-12 p-0 m-0">
                                                        <span><small><Skeleton/></small></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-sm-2 mt-lg-2 p-0 titulo">

                                            <a className="nolink">
                                                <span><Skeleton/></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-end">
                                    <div className="col-12 pl-5 pr-5 pb-3">
                                        <div className="justify-content-center border-top border-dark footerbl">
                                            <span> <Skeleton/></span>
                                            <span><Skeleton/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
    
}

export default SkeletonBlog