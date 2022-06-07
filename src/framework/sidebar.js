/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";

import scrollTo from "./utilities";

import "../css/globals.css"
import "../css/sidebar.css"

const padding = 75


function sign(target) {
    const rect = target.getBoundingClientRect();
    //if it's active set it to center
    //if it's yet to be reached add it to bottom

    if (rect.top + padding > window.innerHeight) {
        return 1;
    } else if (rect.bottom - padding < 0) {
        return -1;
    } else {
        return 0;
    } 
}
/* SIDEBAR */
/* acts like a table of contents */
function retargetScrollHelper(children) {
    var counterTop = 0;
    var counterMid = 0;
    var counterBot = 0;

    // two passes
    for (const elem of children) {
        const target = document.getElementById(elem.id.substring(2));  
        const s = sign(target);

        if (s === 0) {
            counterMid++;
        } else if (s === 1) {
            counterBot++;
        } 
    }

    const totalMid = counterMid;
    counterMid = 0;

    for (const elem of children) {
        const htmlElem = document.getElementById(elem.id);

        const target = document.getElementById(elem.id.substring(2));  
        const s = sign(target);

        if (s === 0) {
            htmlElem.className = 'active-section'
            htmlElem.style.top = `calc(${(counterMid++ - totalMid / 2) * htmlElem.getBoundingClientRect().height}px + 50%)`
        } else if (s === -1) {
            //finished section
            htmlElem.className = 'finished-section'
            htmlElem.style.top = `${counterTop++ * htmlElem.getBoundingClientRect().height}px`
        } else {
            htmlElem.className = 'upcoming-section'
            htmlElem.style.top = `calc(100% - ${counterBot-- * htmlElem.getBoundingClientRect().height}px)`
        }

    }
}

function retargetScroll(e) {
    const sidebar = document.getElementById('sidebar')
    if (!sidebar) return;

    retargetScrollHelper(sidebar.children);
}

class Sidebar extends React.Component {

    render() {
        return (
            <aside id='sidebar'> 
                {this.props.children}
            </aside>
        );
    }

    componentDidMount() {
        retargetScroll()
    }
}

function SidebarElement(props) {
    return (
        <a id={`p-${props.id}`} href={'#'+props.id +'-section'}>
            {props.header}
        </a>
    )
}


document.onscroll = retargetScroll;

export {Sidebar, SidebarElement, scrollTo} 