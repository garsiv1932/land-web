import './ProyectosEntries.css'

import React, {useState} from 'react';
import Slider from 'react-slick';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'

import eventuales from '../../imgs/eventuales-logo-1.png'
import TDR from '../../imgs/TDRC.jpg' 
import MiPedido from '../../imgs/MiPedido.jpeg'
import chevaca from '../../imgs/Chevaca-06-09-2020_v1.jpg'

const images = [{image:chevaca, id:"chevacaImg", url:"http://chevaca.com/"}, {image:MiPedido, id:"MiPedidoImg", url: "http://mipedido.uy"}, {image:eventuales,id:"eventualesImg", url:"http://eventuales.com.uy/" },{image:TDR,id:"TDRImg", url:"http://tdr.uy"}];

function ProyectosEntries(){
    const [imageIndex, setImageIndex] = useState(0);
    
    const NextArrow = ({onClick}) => {
        return(
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight/>
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return(
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft/>
            </div>
        )
    }

    const settings = {
        infinite: true,
        lazyLoad:true,
        speed:300,
        slidesToShow:3,
        centerMode: true,
        centerPadding:0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next)
    }
    

    return (
        <div className="container-fluid text-center">
            <div className="row justify-content-center">
                <div className="col-sm-9 col-lg-9 col-12">
                    <h3>
                        Proyectos
                    </h3>
                    <Slider {...settings}>
                        {images.map((img, idx)=>(
                            <div key={img.id} className={idx===imageIndex ? "slide activeSlide" : "slide not-allowed" }>
                                <div className="card-container">
                                    <div className="image-container">
                                        <a href={img.url}>
                                            <img src={img.image} alt={img} className="img-fluid"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ProyectosEntries;