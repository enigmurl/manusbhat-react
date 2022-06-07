/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";

import routing_dicitionary from "./routing_structure";
import scrollTo from "./utilities";
import "../css/globals.css"
import '../css/navbar.css'


function expandNavbar() {
    const navbar = document.getElementById("navbar")
    if (!navbar.classList.contains("expanded")) {
        navbar.classList.add("expanded");
    } else {
        navbar.classList.remove("expanded");
    }
}

/* NAVIGATION */
function Navbar(props) {
    return (
        <nav id='navbar'>
            <span id='navbar-main'> 
                {/* actual Manu Bhat title */}
                <a href='/'>Manu Bhat</a>
                {/* separate buttons from title*/}
                <ul id='nav-buttons'>  
                    {/* Listed in right first order */}
                    <Navitem title='Work | Large Projects' active = {props.active}/>
                    <Navitem title='Extracurriculars' active = {props.active}/>
                    <Navitem title='Academics | Honors' active = {props.active}/>
                    <Navitem title='Skills' active = {props.active}/>
                    <Navitem title='Contact' active = {props.active}/>
                </ul>
            </span>
            <button id='navbar-expand-button' onClick={expandNavbar}>
                {/* Belive this is from bootstrap, but not sure */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path stroke="rgba(33,33,33,0.5)" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 8h24M4 16h24M4 24h24"/></svg>
            </button>
        </nav>
    );
}
  
function handleNavItem(href, id, highLevel) {
    if (window.location !== href) {
        window.location.assign(href);
    }

    // if (!highLevel) {
    //     scrollTo(id);
    // }
}

function Navitem(props) {
    const title = props.title;

    let buttonClass = 'nav-button-link'
    if (title === props.active) {
        buttonClass += ' active-link'
    }

    const subList = routing_dicitionary[title] ?? {submenu:[]};
    const genList = [];

    const href = props.href || subList.href

    for (const elemName of subList.submenu) {
        // the '-section' gets the anchor translator
        genList.push(<Navitem title = {elemName.name} key = {elemName.id} href = {href + '/#' + elemName.id + '-section'} />)
    }

    /* see if it's a submenu */
    if (genList.length === 0) {
        return (
            <li className='nav-button-span'>
                <a href={href} className={buttonClass}>{props.title} </a>
            </li>
        );
    }

    return (
        <li className='nav-button-span'>
            <a href={href} className={buttonClass}>{props.title} </a>
            <Navdropdown>
                {genList}
            </Navdropdown>
        </li>
    );
}

function Navdropdown(props) {
    return (
        <ul className='nav-dropdown'>
            {props.children}
        </ul>
    );
}

export default Navbar;