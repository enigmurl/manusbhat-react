/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";
import {StandardTemplate, Sidebar, SidebarElement} from "../standard_template";
import "../css/skills.css"

/* SKILLS
 - basic skills I have and what I know
*/

function Skills() {
    return (
        <StandardTemplate active = 'Skills'> 
            {/* section for Computer Science and Programming 
                - web dev - 
                - Algorithms and Data Structures - 5
                - machine learning / AI
                - game dev
                - app development (ios / android)
                - low level 3d graphics (openGL / Metal)
                - Robotics (software and hardware)
                - operating systems/compilers
                - multi threading
                - Big data
                - Terminal / Zsh Shellscript
                - Computer Visions
                - Server Design
                - Memory Management
                - Google cloud platform / Cloud
                - Theoretical Computer Science (Big o, amortized analysis, oracles)
                - C99/C++11
                - Swift
                - Java
                - javscript
                - C#
            */}
            {/* section for art
            video editing - 3 or something idk
            mathmetical animation - 4
            graphic design (bitmap) - 3
            3d modelling / animation
            */}
             {/* Other,
            - 
            - Excel/Spreadsheets
            - CAD 
            - Public Relations
            */}
            {/* Qualities
            - learning fast
            - 
            */}
            {/* section for languages (english and spanish) 
            English - native speaker
            Spanish - read, write, speak
            */}
            <SkillGroup title="Computer Science">
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>

                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>

            </SkillGroup>

            <SkillGroup title="Programming Languages">

            </SkillGroup>

            <SkillGroup title = "Digital Art"> 
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>

            </SkillGroup>

            <SkillGroup title = "Other Skills">
                <Skill
                    name    = "LaTeX"
                    img     = "img/latex.webp"
                    rating  = "rating test"
                />
                <Skill
                    name    = "Excel/Spreadsheets"
                    img     = "img/excel.webp"
                    rating  = "rating test"
                />
                <Skill
                    name    = "CAD"
                    img     = "img/cad.webp"
                    rating  = "rating test"
                />
                <Skill
                    name    = "Public Relations"
                    img     = "img/cad.webp"
                    rating  = "rating test"
                />
            </SkillGroup>

            <SkillGroup title = "Qualities">
                <Skill
                    name    = "Fast Learner"
                    img     = "img/fast_learner.webp"
                    rating  = "rating test"
                />
                <Skill
                    name    = "Timely"
                    img     = "img/timely.webp"
                    rating  = "rating test"
                />  
                <Skill
                    name    = "Persistent"
                    img     = "img/persistent.webp"
                    rating  = "rating test"
                />     
                <Skill
                    name    = "Adaptable"
                    img     = "img/adaptable.webp"
                    rating  = "rating test"
                />     
                <Skill
                    name    = "Collaborative"
                    img     = "img/collaborative.webp"
                    rating  = "rating test"
                />             
                
            </SkillGroup>

            <SkillGroup title = "Languages">
                <Skill
                    name    = "English"
                    img     = "img/english.webp"
                    subtext = "Native speaker"
                    rating  = "rating test"
                />
                <Skill
                    name    = "Spanish"
                    img     = "img/spanish.webp"
                    subtext = "Elementary proficiency"
                    rating  = "rating test"
                />

            </SkillGroup>

        </StandardTemplate>
    );
}

function SkillGroup(props) {
    return (
        <div className="skill-group">

        </div>
    )
}

/**
 *  Props is name for the main description, the image name, and also the rating (possibly with subtext)
 */
function Skill(props) {

}

export default Skills;