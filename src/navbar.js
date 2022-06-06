/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";

import routing_dicitionary from "./routing_structure";

import "./css/globals.css"
import './css/navbar.css'


function ExpandNavbar() {
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
                    <Navitem title='Work | Large Projects' href='/work' active = {props.active}/>
                    <Navitem title='Extracurriculars' href='/extracurriculars' active = {props.active}/>
                    <Navitem title='Academics | Honors' href='/academics' active = {props.active}/>
                    <Navitem title='Skills' href='/skills' active = {props.active}/>
                    <Navitem title='Contact' href='/contact' active = {props.active}/>
                </ul>
            </span>
            <button id='navbar-expand-button' onClick={ExpandNavbar}>
                {/* Belive this is from bootstrap, but not sure */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path stroke="rgba(33,33,33,0.5)" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 8h24M4 16h24M4 24h24"/></svg>
            </button>
        </nav>
    );
}
  
function Navitem(props) {
    const title = props.title;

    let buttonClass = 'nav-button-link'
    if (title === props.active) {
        buttonClass += ' active-link'
    }

    const subList = routing_dicitionary[title] ?? [];
    const genList = [];

    for (const elemName of subList) {
        genList.push(<Navitem key = {elemName.name} title = {elemName.name} href = {elemName.href} />)
    }

    /* see if it's a submenu */
    if (genList.length === 0) {
        return (
            <li className='nav-button-span'>
                <a href={props.href} className={buttonClass}>{props.title} </a>
            </li>
        );
    }

    return (
        <li className='nav-button-span'>
            <a href={props.href} className={buttonClass}>{props.title} </a>
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