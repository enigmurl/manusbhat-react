/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";
import {StandardTemplate} from "../framework/standard_template";
import Section from "../framework/section";

import "../css/work.css"


/* WORK | SIGNIFICANT PROJECTS
 - work empty for now ig, add large projects here
*/
function Work() {
    return (
        <StandardTemplate active = 'Work | Large Projects'> 
            <Section id = 'work' name='Work'>
                <p>Nothing yet...</p>
            </Section>

            <Section id='large-projects' name ='Significant Projects'>
                {/* Idk if there's a way to do this without hard coding... */}
                {/* unit size is set to 0.2 */}
                <div id="projects-graph">
                    
                    <Project 
                        year    = '2019'          
                        title   = "hiddenAI"              
                        size    = "small"
                        href    = "https://github.com/enigmurl/hiddenAI"
                        img     = "/img/hiddenai.webp"
                        top     = "60%"
                        left    = {`${50 + Math.sqrt(2) * 20}%`}
                        />
                    <Project 
                        year    = '2019-20'       
                        title   = "Crater Guardians"      
                        size    = "small"
                        href    = "https://play.google.com/store/apps/details?id=com.enigmadux.craterguardians&hl=en_US&gl=US"
                        img     = "/img/craterguardians.webp"
                        top     = "0%"
                        left    = "50%"
                        />
                    <Project 
                        year    = '2020'          
                        title   = 'Titan Descent 2'       
                        size    = "medium"
                        href    = "https://play.google.com/store/apps/details?id=com.enigmadux.titandescent2&hl=en_US&gl=US"
                        img     = "/img/titandescent2.webp"
                        top     = {`${35 - Math.sqrt(2) * 20}%`}
                        left    = {`${50 - Math.sqrt(2) * 20}%`}
                        />
                    <Project 
                        year    = '2022'               
                        title   = 'APCS Website Admin Tool'          
                        size    = "medium"
                        href    = "https://apcs.tinocs.com"
                        img     = "/img/happysparky.webp"
                        top     = "60%"
                        left    = "50%"
                        />
                        {/* gmanim */}
                    <Project 
                        year    = '2020-ongoing'  
                        title   = 'To be published NET Q1 2023'      
                        size    = "large"
                        img     = "/img/secret.webp"
                        top     = "20%"
                        left    = "50%"
                        />
                        {/* mansotn */}
                    <Project 
                        year    = '2022-ongoing'  
                        title   = 'To be published NET Q3 2022'      
                        size    = "large"
                        img     = "/img/secret.webp"
                        top     = "35%"
                        left    = "10%"
                        />
                </div>  
            </Section>
        </StandardTemplate>
    );
}

// size in {small, medium, large}
function Project(props) {
    return (
        <div className={"project project-" + props.size} style= {{
            top: props.top,
            left: props.left,
        }}>
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                <img alt = {props.title} src={props.img}/>
            </a>
            <span>
                <p className="project-title">{props.title}</p>
                <p className="project-year">{props.year}</p>
            </span>
           
        </div>
    )
}

export default Work;