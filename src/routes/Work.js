/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";
import {StandardTemplate} from "../framework/standard_template";
import Section from "../framework/section";


/* WORK | SIGNIFICANT PROJECTS
 - work empty for now ig, add large projects here
*/
function Work() {
    return (
        <StandardTemplate active = 'Work | Large Projects'> 
            <Section id = 'work' name='Work'>

            </Section>

            <Section id='large-projects' name ='Significant Projects'>

            </Section>
        </StandardTemplate>
    );
}

export default Work;