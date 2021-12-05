import React, {useEffect, useState} from "react";
import {withRouter} from 'react-router-dom'

import { nanoid } from 'nanoid'


import P from '../../imgs/Icons/P.png'

import "./Blog.css"
import {useArticles} from "../../hooks/useArticles";
import SkeletonBlog from "../../Components/Skeleton/SkeletonBlog";





const Blog = ({history,setHideNavAndFooter}) => {
    const { articles } = useArticles();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },5000)
    });

    useEffect(() => {
        setHideNavAndFooter(false);
    },[]);


    const loader = () => {
        return(
        <SkeletonBlog/>
        )
    }
    
    if(loading){
        return loader()
    }else {
        return (
            <div>
                <div id="Blog" className="container-fluid">
                    {articles.map((art, index) => (
                        <div className="row justify-content-center pt-5" key={index}>
                            <div className="col-sm-8 col-lg-8 col-12 test">
                                <div className="row testheight">
                                    <div className="col-sm-6 col-lg-6 col-12 testright p-0">
                                        <a href={art.article_Link}>
                                            <img src={art.image} alt=""/>
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
                                                                <span><small>{art.user.first_Name} {art.user.first_Last_Name}</small></span>
                                                            </div>
                                                            <div id="fecha" className="col-12 p-0 m-0">
                                                                <span><small>{art.Publish_Date}</small></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-sm-2 mt-lg-2 p-0 titulo">

                                                    <a href={art.article_Link} className="nolink">
                                                        <span>{art.tittle}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-end">
                                            <div className="col-12 pl-5 pr-5 pb-3">
                                                <div className="justify-content-center border-top border-dark footerbl">
                                                    <span> {art.visit_Count} visitas</span>
                                                    <span> {art.comments.length} comentarios</span>
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
}


export default withRouter(Blog);