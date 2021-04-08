import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';

function Footer(){
    return(
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Pablo Llorach.
                </MDBContainer>
            </div>
        </MDBFooter>
    )
}

export default Footer;