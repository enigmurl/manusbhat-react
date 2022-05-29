/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import './css/commons.css'

function StandardTemplate(props) {
    return (
        <div className="app">
            <header> 
                <Navbar />
            </header>

            <main>
                {props.children}
            </main>

            <footer> 

            </footer>
        </div>
    );
}

/* NAVIGATION */
function Navbar(props) {
    return (
        <nav className="navbar">
            {/* actual Manu Bhat title */}

            {/* separate buttons from title*/}
            <div className="nav-buttons">  

            </div>

            <p> test</p>
        </nav>
    );
}
  
function Navitem() {
    return (
        <div className="navbutton">

        </div>
    );
}

function Navdropdown() {
    return (
        <div>

        </div>
    );
}
  
/* FOOTER */

function Footer() {
    return (
        <div>
        {/* has the social media pages and related content */ }
        </div>
    );
}

export default StandardTemplate;
