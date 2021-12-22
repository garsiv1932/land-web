import React from 'react'
import {withRouter} from 'react-router-dom'
import Images from "../../Components/Images/Images";
import Phrase from "../../Components/Phrase/Phrase";
/*import ProyectosEntries from "../../Components/ProyectosEntries/ProyectosEntries";*/
import CarouselComponent from "../../Components/ProyectosEntries/carousel";



import './Home.css'
import Contact from "../../Components/Contact/Contact";


const Home = ({history}) => {
  return (
    <div style={{ paddingBotton: "0%"}}>
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
          <section>
            <CarouselComponent/>
          </section>
  </div>
  )
}
export default withRouter(Home);