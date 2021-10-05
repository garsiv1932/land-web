import React, {useEffect, useState} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import linkedin from '../../imgs/Icons/Linkedin-W.png';
import github from '../../imgs/Icons/github-20-W.png'

const Navbar = () => {

  function animation(){

    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });

  }
  

        
  //   useEffect(() => {
  //
  //   animation();
  //
  //   $(window).on('resize', function(){
  //     setTimeout(function(){ animation(); }, 500);
  //   });
  //  
  // }, []);
  
  return (
      <div className="fixedNav">
          <nav className="navbar navbar-expand-lg navbar-mainbg line-white">
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
    
    
              <button className="navbar-toggler pl-2"
                onClick={ function(){
                  setTimeout(function(){ animation(); });
                }}
                type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
              </button>
 
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-lg-5 mr-0">
                    
                    {/*<div className="hori-selector">*/}
                    {/*  <div className="left"></div>*/}
                    {/*  <div className="right"></div>*/}
                    {/*</div>*/}

                    
                    <li className="nav-item" id="homeLink" >
                      <NavLink className="nav-link" to="/" exact >
                        <i 
                        className="fas fa-tachometer-alt">
                        </i>Home
                      </NavLink>
                    </li>
        
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Blog" exact>
                        <i 
                        className="far fa-address-book">
                        </i>Blog
                      </NavLink> 
                    </li>
        
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/CV" exact>
                        <i 
                        className="far fa-clone">
                        </i>CV
                      </NavLink>
                    </li>
                </ul>
              </div>
          </nav>
          <div className="line-black"></div>
      </div>
  )
}
export default Navbar;