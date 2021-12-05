import "./Gallery.css"
import {withRouter} from "react-router-dom";
import {useEffect} from "react";
import underConstrcution from '../../imgs/doing-some-work.png'


function Gallery({history,setHideNavAndFooter}){
    useEffect(() => {
        setHideNavAndFooter(true);
    },[])
    return(
        <div id="gallery-main" className="container-fluid">
            <div className="row">
                <div className="col-lg-2 d-none d-sm-block"/>
                <div id="under-construction-box" className="col-lg-8 col-12">
                    <img src={underConstrcution} alt="" id="under-construction-img" />
                </div>
                
                <div className="col-lg-2 d-none d-sm-block"/>                
            </div>
        </div>
    )
}

export default withRouter(Gallery) 