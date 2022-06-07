/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";
import {StandardTemplate} from "../framework/standard_template";
import Section from "../framework/section";
import { Sidebar, SidebarElement } from "../framework/sidebar";

import "../css/globals.css"
import "../css/academics.css"


/* ACADEMIC | HONORS
 - Transcript (filter through all, APS, stem APs something like that)
 - self studied works
 - honors

 Honors
UCSD

CHS
- filter
-  

*/
function Academics() {
    return (
        <StandardTemplate active = 'Academics | Honors'> 
            <Sidebar>
                <SidebarElement id='honors' header='HONORS'/>
                <SidebarElement id='ucsd' header='UCSD'/>
                <SidebarElement id='chs' header='CHS'/>
            </Sidebar>

            <div id = 'academics'>
                <Section id ='honors' name = 'Honors'>
                    <ul id='honors-list' className="academics-content">
                        <HonorsItem name='USACO Gold Division' year='2020' desc='[Top ~5% nationally]' />
                        <HonorsItem name='AP Scholar with Distinction' year='2021' desc = '[Scored 5 on 5 AP tests]'/>
                    </ul>
                </Section>

                <Section id = 'ucsd' name ='UC San Diego'>
                    <AcademicSchedule>
                        <Term title="'22 Fall">
                            <Course courseName='*courses to be finalized later*'/>
                            <Course courseName='*courses to be finalized later*'/>
                            <Course courseName='*courses to be finalized later*'/>
                            <Course courseName='*courses to be finalized later*'/>
                            <Course courseName='*courses to be finalized later*'/>
                        </Term>
                        <Term title="'23 Winter">
                            <Course courseName='*courses to be finalized later*'/>
                            <Course courseName='*courses to be finalized later*'/>
                            <Course courseName='*courses to be finalized later*'/>
                            <Course courseName='*courses to be finalized later*'/>
                            <Course courseName='*courses to be finalized later*'/>
                        </Term>
                        <Term title="'23 Spring">
                            <Course courseName='*courses to be finalized later*'/>
                            <Course courseName='*courses to be finalized later*'/>
                            <Course courseName='*courses to be finalized later*'/>
                            <Course courseName='*courses to be finalized later*'/>
                            <Course courseName='*courses to be finalized later*'/>
                        </Term>
                    </AcademicSchedule>
                </Section>

                <Section id = 'chs' name ='Cupertino High School'>
                    <AcademicSchedule summary="2018 - 2022 4.0 U/W GPA" legend = "Legend: Course Name | AP Score (if applicable) | Grade" >
                        <Term title="9th Sem 1">
                            <Course courseName='Algebra 2/Trigonometry' grade='A'/>
                            <Course courseName='Intro to Biology'       grade='A+'/>
                            <Course courseName='Beginning Drama'        grade='A-'/>
                            <Course courseName='Literature/Writing'     grade='A-'/>
                            <Course courseName='PE 9'                   grade='A'/>
                            <Course courseName='Spanish 2'              grade='A'/>
                        </Term>
                        <Term title="9th Sem 2">
                            <Course courseName='Algebra 2/Trigonometry' grade='A'/>
                            <Course courseName='Intro to Biology'       grade='A+'/>
                            <Course courseName='Beginning Drama'        grade='A'/>
                            <Course courseName='Literature/Writing'     grade='A'/>
                            <Course courseName='PE 9'                   grade='A'/>
                            <Course courseName='Spanish 2'              grade='A'/>
                        </Term>
                        <Term title="10th Sem 1">
                            <Course courseName='AP Computer Science A'  grade='A+'/>
                            <Course courseName='Chemistry Honors'       grade='A+'/>
                            <Course courseName='Pre-Calculus Honors'    grade='A'/>
                            <Course courseName='Spanish 3'              grade='A'/>
                            <Course courseName='World Studies'          grade='A+'/>
                            <Course courseName='World Studies (History)'grade='A'/>
                        </Term>
                        <Term title="10th Sem 2">
                            <Course courseName='AP Computer Science A'  grade='CR' ap ='5'/>
                            <Course courseName='Chemistry Honors'       grade='CR'/>
                            <Course courseName='Pre-Calculus Honors'    grade='CR'/>
                            <Course courseName='Spanish 3'              grade='CR'/>
                            <Course courseName='World Studies'          grade='CR'/>
                            <Course courseName='World Studies (History)'grade='CR'/>
                        </Term>
                        <Term title="11th Sem 1">
                            <Course courseName='American Literature/Writing'   grade='A'/>
                            <Course courseName='AP Calculus BC'                grade='A'/>
                            <Course courseName='AP Physics C (Mechanics)'      grade='A+' ap='5'/>
                            <Course courseName='AP US History'                 grade='A'/>
                            <Course courseName='Spanish 4 Honors'              grade='A'/>
                            <Course courseName='APCS-A Teacher Assistant'      grade='A+'/>
                        </Term>
                        <Term title="11th Sem 2">
                            <Course courseName='American Literature/Writing'  grade='A-'/>
                            <Course courseName='AP Calculus BC'               grade='A+' ap='5'/>
                            <Course courseName='AP Physics C (E/M)'           grade='A+' ap='5'/>
                            <Course courseName='AP US History'                grade='A+' ap='5'/>
                            <Course courseName='Spanish 4 Honors'             grade='A'/>
                            <Course courseName='APCS-A Teacher Assistant'     grade='A+'/>
                        </Term>
                        <Term title="12th Sem 1">
                            <Course courseName='AP Biology'              grade='A+'/>
                            <Course courseName='AP Spanish Language'     grade='A+'/>
                            <Course courseName='AP Statistics'           grade='A+'/>
                            <Course courseName='AP US Government/Politics'grade='A' ap='5'/>
                            <Course courseName='Voices of Modern Culture'grade='A'/>
                            <Course courseName='PE Weight Training'      grade='A'/>
                            <Course courseName='APCS-A Teacher Assistant'grade='A+'/>
                        </Term>
                        <Term title="12th Sem 2">
                            <Course courseName='AP Biology'              grade='A' ap='5'/>
                            <Course courseName='AP Spanish Language'     grade='A+' ap='??'/>
                            <Course courseName='AP Statistics'           grade='A+' ap='5'/>
                            <Course courseName='AP Microeconomics'       grade='A+' ap='5'/>
                            <Course courseName='Voices of Modern Culture'grade='A-'/>
                            <Course courseName='PE Weight Training'      grade='A-'/>
                            <Course courseName='APCS-A Teacher Assistant'grade='A+'/>
                        </Term>
                    </AcademicSchedule>
                </Section>
            </div>
        </StandardTemplate>
    );
}

function HonorsItem(props) {
    return (
        <li className="honor-item">
            <span className="honor-circle"/>
            {/* right  */}
            <span className="honor-rectangle">
                <p className="honor-title">{props.name}</p>
                <p className="honor-description">{props.year}</p>
                <p className="honor-description">{props.desc}</p>
            </span>
        </li>
    )
}

function AcademicSchedule(props) {
    return (
        <div className="academics-content">
            {/* Summary */}
            <p className="academic-summary">{props.summary}</p>
            <p className="academic-summary">{props.legend}</p>
            <div className="academic-schedule">
                {props.children}
            </div>
        </div>
    );
}

//represents one academic sitting
function Term(props) {
    return (
        <div className="academic-term">
            <p className="term-header">{props.title}</p>
            <CourseList>
                {props.children}
            </CourseList>
        </div>
    )
}

function CourseList(props) {
    return (
        <span className="academic-course-list">
            {props.children}
        </span>
    )
}

function Course(props) {
    if (props.ap) {
        return (
            <div className="academic-course">
                <p>{props.courseName}</p>
                <span className="academic-course-grade">
                    <p className="academic-ap">{props.ap}</p>
                    <p className='academic-grade-only'>{props.grade}</p>
                </span>
            </div>
            )
    }
    return (
    <div className="academic-course">
        <p>{props.courseName}</p>
        <span className="academic-course-grade">
            <p className='academic-grade-only'>{props.grade}</p>
        </span>
    </div>)
}


export default Academics;