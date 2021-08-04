import {withRouter} from 'react-router-dom' 
import {useEffect} from 'react'
import scarlet from '../../imgs/scarlet-white.png';
import './Page404.css'

function Page404({history,setHideNavAndFooter}){
    useEffect(() => {
        setHideNavAndFooter(true);
    });
    return(
        <div className="notfound container-fluid">
            <div className="row height align-items-end">
            <div className="col-12">
                <div className="row">
                    <div className="col-6">
                    </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-center">
                            <a href="/home" className="scarlet"> 
                                <img src={scarlet} ></img>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default withRouter(Page404);