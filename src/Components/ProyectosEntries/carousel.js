import React from "react";
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
import eventuales from '../../imgs/eventuales-logo-1.png'
import TDR from '../../imgs/TDRC.jpg' 
import MiPedido from '../../imgs/MiPedido.jpeg'
import chevaca from '../../imgs/Chevaca-06-09-2020_v1.jpg'
const images = [{image:chevaca, id:"chevacaImg", url:"http://chevaca.com/"}, {image:MiPedido, id:"MiPedidoImg", url: "http://mipedido.uy"}, {image:eventuales,id:"eventualesImg", url:"http://eventuales.com.uy/" },{image:TDR,id:"TDRImg", url:"http://tdr.uy"}];

export default function CarouselComponent() {
    return (
        <div className="carousel-inner col-sm-9 col-lg-9 col-12 container-fluid text-center" >
            <div className="row title" >
            <Carousel infiniteLoop useKeyboardArrows autoPlay centerMode={false} thumbWidth={'80px'} autoPlay={false}>
                <div className="carousel-item">
                    <img className="d-block w-80" src={chevaca} /> <a href="http://chevaca.com/" style={{diplay: 'block'}}></a>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-80" src={eventuales} /> <a href="http://eventuales.com.uy/" style={{diplay: 'block'}}></a>
                </div>
                <div className="carousel-item">
                   
                    <img className="d-block w-80" src={MiPedido} /> <a href="http://mipedido.uy" style={{diplay: 'block'}}></a>
                </div>
            </Carousel>
            </div>
        </div>
    );
}