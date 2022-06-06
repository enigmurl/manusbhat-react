/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

 import React from "react";
 import "./css/globals.css"
 import "./css/sidebar.css"

/* SIDEBAR */
/* acts like a table of contents */
function retargetScrollHelper(children) {
    var counter = 0;
    for (const elem of children) {
        const htmlElem = document.getElementById(elem.id);

        const target = document.getElementById(elem.id.substring(2));
        const rect = target.getBoundingClientRect();
        //if it's active set it to center
        //if it's yet to be reached add it to bottom

        if (rect.top > window.innerHeight) {
            elem.className = 'upcoming-section'
        } else if (rect.bottom < 0) {
            elem.classList = 'finished-section'
        } else {
            elem.classList = 'active-section'
        } 

        htmlElem.style.transform = `translateY(${htmlElem.getBoundingClientRect().height * counter}px)`
        counter++;
        //change transform
    }
}

function retargetScroll(e) {
    console.log("called");
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
        <p id={`p-${props.id}`} >
            {props.header}
        </p>
    )
}


document.onscroll = retargetScroll;

export {Sidebar, SidebarElement} 