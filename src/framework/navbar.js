/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../css/globals.css"
import '../css/navbar.css'

const routing_dicitionary = {
    "Academics | Honors" : {
        href:"/academics",
        submenu:[
            {
                name:"Honors",
                id:"honors"
            }, 
            {
                name:"UCSD",
                id:"ucsd"
            }, 
            {
                name:"CHS",
                id:"chs"
            }
        ]
    },
    Contact :   {
        href:"/contact",
        submenu:[
        ]
    },
    Extracurriculars : {
        href:"/extracurriculars",
        submenu:[
            {
                name:"College",
                id:"college"
            }, {
                name:"High School",
                id:"high-school"
            }
        ]
    },
    Home : {
        href:"/",
        submenu:[
        ]
    },
    Skills :  {
        href:"/skills",
        submenu:[
            {
                name:"Computer Science",
                id:"computer-science"
            }, 
            {
                name:"Coding Languages",
                id:  "coding-languages"
            }, 
            {
                name:"Digital Art",
                id:"digital-art"
            }, 
            {
                name:"Other Skills",
                id:"other-skills"
            }, 
            {
                name:"Qualities",
                id:"qualities"
            }, 
            {
                name:"Spoken Languages",
                id:"spoken-languages"
            }
        ]
    },
    "Work | Large Projects" : {
        href:"/work",
        submenu:[
            {
                name:"Work",
                id:"work"
            }
            , {
                name:"Large Projects",
                id:"large-projects"
            }
        ]
    },
};

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
                <Link to='/'>Manu Bhat</Link>
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
        genList.push(<Navitem title = {elemName.name} key = {elemName.id} href = {href + '#' + elemName.id + '-section'} />)
    }

    /* see if it's a submenu */
    if (genList.length === 0) {
        return (
            <li className='nav-button-span'>
                <HashLink to={href} className={buttonClass}>{props.title}</HashLink>
            </li>
        );
    }

    return (
        <li className='nav-button-span'>
            <Link to={href} className={buttonClass}>{props.title}</Link>

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

export {routing_dicitionary, Navbar};