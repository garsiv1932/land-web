import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';

function Footer(){
    return(
        <MDBFooter color="blue" className="font-small pt-0 mt-0 ">
            <div className="footer-copyright text-center py-3 foot-size">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Pablo Llorach.
                </MDBContainer>
            </div>
        </MDBFooter>
    )
}

export default Footer;