import './Navbar.css';
import { NavLink } from 'react-router-dom';
import linkedin from '../../imgs/Icons/Linkedin-W.png';
import github from '../../imgs/Icons/github-20-W.png'
import { useState } from "react";

const Navbar = () => {

  const [show, setShow] = useState(false);
  const handleNavClick = () => {
    setShow(false);
  };
  
  return (
      <div className="fixedNav">
          <nav className="navbar navbar-expand-md navbar-mainbg line-white">
              <div className="pl-lg-5 pl-0 namebar">
                  <NavLink className="navbar-brand navbar-logo namebartext" to="/">PABLO LLORACH</NavLink>
              </div>
      
              <div className="lili pl-0 ml-0 pl-md-0 pl-lg-4 mr-lg-3 mr-0">
                 <a href="https://github.com/garsiv1932">
                      <img alt="Github" src={github}/>
                  </a>
              </div>
              <div className="lili pl-lg-1 pl-0 pr-lg-5 pr-0">
                  <a href="https://www.linkedin.com/in/pablo-llorach-746a21128/">
                      <img alt="LinkedIn" src={linkedin}/>
                  </a>
              </div> 
    
              <button
                className="navbar-toggler"
                id="navbartogglebutton"
                type="button"
                onClick={() => setShow(!show)}
              >
                <span className="navbar-toggler-icon" />
              </button>
      
              <div className={`collapse navbar-collapse  ${show ? "show" : ""}`}
              id="navbarCollapse">
                <ul className="navbar-nav ml-auto mr-lg-5 mr-0">
                    <li className="nav-item">
                        <NavLink onClick={handleNavClick} activeClassName="active" className="nav-link" to="/CV" exact>
                            <i
                                className="far fa-clone">
                            </i>CV
                        </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink onClick={handleNavClick} activeClassName="active" className="nav-link" to="/Blog" exact>
                        <i 
                        className="far fa-address-book">
                        </i>Blog
                      </NavLink> 
                    </li>
                    <li className="nav-item" id="homeLink" >
                        <NavLink onClick={handleNavClick} activeClassName="active" className="nav-link" to="/Gallery" exact >
                            <i
                                className="fas fa-tachometer-alt">
                            </i>Gallery
                        </NavLink>
                    </li>
                </ul>
              </div>
          </nav>
          <div className="line-black"/>
      </div>
  )
}
export default Navbar;