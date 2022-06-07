/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";

import '../css/globals.css'

import Navbar from "./navbar";
import Footer from "./footer";

function StandardTemplate(props) {
    return (
        <div id='app'>
            <header> 
                <Navbar active={props.active}/>
            </header>

            <main>
                {props.children}
            </main>

            <Footer/>
        </div>
    );
}


export {StandardTemplate};
