/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";

import '../css/globals.css'

import { Navbar, routing_dicitionary } from "./navbar"; 
import Footer from "./footer";
import { Sidebar, SidebarElement } from "./sidebar";

function StandardTemplate(props) {
    var sidebarElements = [];
    for (const elem of routing_dicitionary[props.active].submenu) {
        sidebarElements.push(
            <SidebarElement key = {elem.id} id={elem.id} header={elem.name.toUpperCase()} />
        )
    }

    return (
        <div id='app'>
            <header> 
                <Navbar active={props.active}/>
            </header>

            <main>
                {props.children}
                <Sidebar>
                    {sidebarElements}
                </Sidebar>
            </main>

            <Footer/>
        </div>
    );
}


export {StandardTemplate};
