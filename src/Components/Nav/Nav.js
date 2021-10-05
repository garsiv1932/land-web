import "./Nav.scss"
import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";

import linkedin from '../../imgs/Icons/Linkedin-W.png';
import github from '../../imgs/Icons/github-20-W.png'

const Nav = ()=>{
    function initMenu(elem){

        // function that returns m-active element on active link
        returnToActiveElement();
        function returnToActiveElement(){
            // find active link and get its width and left offset
            var active_menu = document.querySelectorAll(elem + " .active");
            Array.prototype.forEach.call(active_menu, function (e) {
                var width = e.offsetWidth;
                var left = e.offsetLeft;
                // find m-active element and give him width and left offset of active link
                var active_menu_slider = document.querySelectorAll(elem + " .m-active");
                Array.prototype.forEach.call(active_menu_slider, function (el) {
                    el.style.width = width+"px";
                    el.style.left =  left+"px";
                });
            });
        }

        // get all links of the menu
        var menu_list = document.querySelectorAll(elem + " a");
        Array.prototype.forEach.call(menu_list, function (e) {
            // mouseenter function, getting width and left offset of the hover link
            e.addEventListener("mouseenter", function( event ) {
                var width = e.offsetWidth;
                var left = e.offsetLeft;

                // find m-active element and give him width and left offset of hover link
                var active_menu_slider = document.querySelectorAll(elem + " .m-active");
                Array.prototype.forEach.call(active_menu_slider, function (el) {
                    el.style.width = width+"px";
                    el.style.left =  left+"px";
                });
            }, false);

            // on mouseleave return m-active element to the active link
            e.addEventListener("mouseleave", function( event ) {
                returnToActiveElement();
            }, false);

            // on link click, make that link active
            e.addEventListener("click", function( event ) {
                if (!event.target.matches(elem+' a')) return;
                else{
                    if(!event.target.classList.contains('active')){
                        var active_menu = document.querySelectorAll(elem + " .active");
                        Array.prototype.forEach.call(active_menu, function (el) {
                            el.classList.remove("active");
                        });
                        event.target.classList.add("active");
                    }
                }
            });
        });


        // on window resize call returnToActiveElement funciton to change the style 
        window.addEventListener("resize", returnToActiveElement);
    }

    useEffect(() => {
        initMenu("#myMenu");
    }, []);
    // start menu

    return(
    <div className="fixedNav">
        <nav className="menu" id="myMenu">
            <ul>
                {/*active link and hover indicator, menu slider*/}
                <div className="m-active"></div>
    
                {/*-- menu links --*/}

                <li>
                    <NavLink className="nav-link" to="/" exact >
                        <i
                            className="fas fa-tachometer-alt">
                        </i>Home
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav-link" to="/Blog" exact>
                        <i
                            className="far fa-address-book">
                        </i>Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/CV" exact>
                        <i
                            className="far fa-clone">
                        </i>CV
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
)
}

export default Nav;