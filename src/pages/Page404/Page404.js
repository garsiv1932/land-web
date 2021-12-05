import {withRouter} from 'react-router-dom' 
import {useEffect} from 'react'
import scarlet from '../../imgs/scarlet-white.png';
import './Page404.css'

function Page404({history,setHideNavAndFooter}){
    useEffect(() => {
        setHideNavAndFooter(true);
    },[]);
    return(
        <div className="notfound container-fluid"/>
    )
}

export default withRouter(Page404);