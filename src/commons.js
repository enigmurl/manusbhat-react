/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import './css/commons.css'
import routing_dicitionary from './routing_structure';

function StandardTemplate(props) {
    return (
        <div className='app'>
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

/* NAVIGATION */
function Navbar(props) {
    return (
        <nav className='navbar'>
            {/* actual Manu Bhat title */}
            <a href='/'>Manu Bhat</a>
            {/* separate buttons from title*/}
            <ul className='nav-buttons'>  
                {/* Listed in right first order */}
                <Navitem name='Work | Large Projects' href='/work' active = {props.active}/>
                <Navitem name='Extracurriculars' href='/extracurriculars' active = {props.active}/>
                <Navitem name='Academics | Honors' href='/academics' active = {props.active}/>
                <Navitem name='Skills' href='/skills' active = {props.active}/>
                <Navitem name='Contact' href='/contact' active = {props.active}/>
            </ul>
        </nav>
    );
}
  
function Navitem(props) {
    const title = props.name;

    let buttonClass = 'nav-button-link'
    if (title === props.active) {
        buttonClass += ' active-link'
    }

    const subList = routing_dicitionary[title] ?? [];
    const genList = [];

    for (const elemName of subList) {
        genList.push(<Navitem name = {elemName.name} href ={elemName.href} />)
    }

    /* see if it's a submenu */
    if (genList.length === 0) {
        return (
            <li class='nav-button-span'>
                <a href={props.href} className={buttonClass}>{props.name} </a>
            </li>
        );
    }

    return (
        <li class='nav-button-span'>
            <a href={props.href} className={buttonClass}>{props.name} </a>
            <Navdropdown>
                {genList}
            </Navdropdown>
        </li>
    );
}

function Navdropdown(props) {
    return (
        <ul class='nav-dropdown'>
            {props.children}
        </ul>
    );
}
  
/* FOOTER */

function Footer() {
    return (
        <footer>
            {/* has the social media pages and related content */ }
            {/* Below are some of my social media pages, my preferred */}
            {/* method of contact for formal matters is email [] */}
            {/* and for informal matters is discord []*/}

            {/* github, gmail, linked in, discord, facebook, instagram, twitter */}

            
            <div className='footer-icons'>
                <FooterIcon/>
                <FooterIcon/>
                <FooterIcon/>
                <FooterIcon/>
                <FooterIcon/>
                <FooterIcon/>
            </div>

            <p>Copyright © 2022 Manu Bhat. All rights reserved. </p>
        </footer>
    );
}


function FooterIcon(props) {
    return (<svg>

    </svg>)
}


export default StandardTemplate;
