/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";
import {StandardTemplate} from "../standard_template";
import { Sidebar, SidebarElement } from "../sidebar";

import "../css/extracurriculars.css"


/* EXTRACURRICULARS
 - stuff like gdc, split into high school and no high school
*/
function Extracurriculars() {
    return (
        <StandardTemplate active = 'Extracurriculars'> 
            <Sidebar>
                <SidebarElement id='college' header='COLLEGE'/>
                <SidebarElement id='high-school' header ='HIGH SCHOOL'/>
                <SidebarElement id='high-school1' header ='HIGH SCHOOL 1'/>
                <SidebarElement id='high-school2' header ='HIGH SCHOOL 2'/>
                <SidebarElement id='high-school3' header ='HIGH SCHOOL 3'/>
                <SidebarElement id='high-school4' header ='HIGH SCHOOL 4'/>
                <SidebarElement id='high-school5' header ='HIGH SCHOOL 5'/>
                <SidebarElement id='high-school6' header ='HIGH SCHOOL 6'/>
                <SidebarElement id='high-school7' header ='HIGH SCHOOL 7'/>
                <SidebarElement id='high-school8' header ='HIGH SCHOOL 8'/>
                <SidebarElement id='high-school9' header ='HIGH SCHOOL 9'/>
            </Sidebar>

        <div id="extracurriculars">
            <p id ='college'>
                college header
            </p>

            <p id ='high-school'>
                high school header
            </p>
            <p id ='high-school1'>
                high school header
            </p>
            <p id ='high-school2'>
                high school header
            </p>
            <p id ='high-school3'>
                high school header
            </p>
            <p id ='high-school4'>
                high school header
            </p>
            <p id ='high-school5'>
                high school header
            </p>
            <p id ='high-school6'>
                high school header
            </p>
            <p id ='high-school7'>
                high school header
            </p>
            <p id ='high-school8'>
                high school header
            </p>
            <p id ='high-school9'>
                high school header
            </p>
            
        </div>

        </StandardTemplate>
    );
}

export default Extracurriculars;