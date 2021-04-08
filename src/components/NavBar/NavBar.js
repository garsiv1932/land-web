import './NavBar.css'
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { bubble as Menu } from "react-burger-menu";
import linkedin from '../../imgs/Icons/LinkedIn.webp';
import github from '../../imgs/Icons/github-20.svg'

function BarNav(){
    function showSettings (event){
        event.preventDefault();
    }
    
    return(
    <div id="barnav">
        <Navbar collapseOnSelect expand="lg" fixed="top" className="paddingcero height d-none d-sm-block">
            <div className="pl-5 namebar">
                <Link className="navbar-brand namebartext" to="/Home">PABLO LLORACH</Link>
            </div>
            <div className="color-nav">
                <div className="ml-5">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <div className="lili" >
                                <Link className="nav-link p-sm-2 p-lg-2 p-0 lilitext" to="/Home">Inicio</Link>
                            </div>
                            <div className="lili">
                                <Link className="nav-link p-sm-2 p-lg-2 p-0 lilitext" to="/Blog">Blog</Link>
                            </div>
                            <div className="lili">
                                <Link className="nav-link  p-sm-2 p-lg-2 p-0 lilitext" to="/CV">CV</Link>
                            </div>
                            {/*<Nav.Link className="lili">*/}
                            {/*    <Link className="nav-link  p-sm-2 p-lg-2 p-0 lilitext" to="/Proyectos">Proyectos</Link>*/}
                            {/*</Nav.Link>*/}
                        </Nav>
                        <div className="lili mr-3">
                            <a href="https://github.com/garsiv1932">
                                <img alt="LinkedIn" src={github}/>
                            </a>
                        </div>
                        <div className="lili pr-5">
                            <a href="https://www.linkedin.com/in/pablo-llorach-746a21128/">
                                <img alt="LinkedIn" src={linkedin}/>
                            </a>
                        </div>
                    </Navbar.Collapse>
                </div>
            </div>
        </Navbar>

        <div className="d-block d-sm-none">
            <Menu>
                <Link className="nav-link menu-item mobiletext" to="/Home">Inicio</Link>
                <Link className="nav-link menu-item mobiletext " to="/Blog">Blog</Link>
                <Link className="nav-link  menu-item mobiletext" to="/CV">CV</Link>
                {/*<Link className="nav-link  menu-item mobiletext" to="/Proyectos">Proyectos</Link>*/}
            </Menu>
        </div>
    </div>

    )
}

export default BarNav;