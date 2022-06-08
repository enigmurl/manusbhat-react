/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";
import {StandardTemplate} from "../framework/standard_template";
import { Skill, SkillGroup} from "../framework/skill_list";

/* SKILLS
 - basic skills I have and what I know
*/

function Skills() {
    return (
        <StandardTemplate active = 'Skills'> 
            {/* section for Computer Science and Programming 
                - Computer Visions
                - Server Design
            */}
        
            <SkillGroup id = 'computer-science' title="Computer Science">
                <Skill
                    name    = "Algorithms"
                    desc    = "Extremely proficient"
                    img_src = "/img/algorithms.png"
                    rating  = "3"
                />
                <Skill
                    name    = "Data Structures"
                    desc    = "Extremely proficient"
                    img_src = "/img/datastructures.png"
                    rating  = "3"
                />
                <Skill
                    name    = "Machine Learning/AI"
                    img_src = "/img/aiml.png"
                    rating  = "3"
                />
                <Skill
                    name    = "Web Development"
                    desc    = "React"
                    img_src = "/img/webdev.png"
                    rating  = "2"
                />
                <Skill
                    name    = "App Development"
                    desc    = "Android and iOS"
                    img_src = "/img/appdev.png"
                    rating  = "2"
                />
                <Skill
                    name    = "Game Development"
                    desc    = "Unity and OpenGL/Metal"
                    img_src = "/img/gamedev.png"
                    rating  = "3"
                />
                <Skill
                    name    = "Terminal/Shellscript"
                    desc    = "Zsh and Vim"
                    img_src = "/img/terminal.png"
                    rating  = "3"
                />
                <Skill
                    name    = "Multi Threading"
                    img_src = "/img/multithreading.png"
                    rating  = "3"
                />
                <Skill
                    name    = "Memory Management"
                    img_src = "/img/memorymanagement.png"
                    rating  = "3"
                />
                <Skill
                    name    = "Version Control System"
                    desc    = "Git"
                    img_src = "/img/vcs.png"
                    rating  = "3"
                />
                <Skill
                    name    = "Operating Systems"
                    img_src = "/img/os.png"
                    rating  = "3"
                />
                <Skill
                    name    = "Compilers"
                    img_src = "/img/compilers.png"
                    rating  = "3"
                />
                <Skill
                    name    = "Bioinformatics"
                    img_src = "/img/bioinformatics.png"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Computer Vision"
                    img_src = "/img/computervision.png"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Networking"
                    img_src = "/img/networking.png"
                    desc    = "How the internet works"
                    rating  = "0"
                />
                <Skill
                    name    = "Regular Expressions"
                    img_src = "/img/regex.png"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Distributed Systems"
                    img_src = "/img/distributedsystems.png"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Cloud Computing"
                    img_src = "/img/cloudcomputing.png"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Server Design"
                    img_src = "/img/serverdesign.png"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Cryptography"
                    img_src = "/img/crypto.png"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Quantum Computing"
                    img_src = "/img/quantum.png"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
            </SkillGroup>

            <SkillGroup id = 'coding-languages' title="Coding Languages">
                <Skill
                    name    = "C99"
                    img_src = "img/c99.png"
                    rating  = "3"
                />
                <Skill
                    name    = "C++11"
                    img_src = "/img/c++11.png"
                    rating  = "3"
                />
                <Skill
                    name    = "Java 1.8"
                    img_src = "/img/java1.8.png"
                    rating  = "3"
                />
                 <Skill
                    name    = "Swift 5"
                    img_src = "/img/swift5.png"
                    rating  = "3"
                />
                <Skill
                    name    = "Python 3"
                    img_src = "/img/python3.png"
                    rating  = "2"
                />
                <Skill
                    name    = "C# 10"
                    img_src = "/img/csharp10.png"
                    rating  = "1"
                />
                <Skill
                    name    = "Javascript ES6"
                    img_src = "/img/javascriptes6.png"
                    rating  = "1"
                />
               <Skill
                    name    = "Object-oriented Programming"
                    img_src = "/img/oop.png"
                    rating  = "3"
                />
                <Skill
                    name    = "Procedural Programming"
                    img_src = "/img/procedural.png"
                    rating  = "3"
                />
            </SkillGroup>

            <SkillGroup id = 'digital-art' title = "Digital Art"> 
                <Skill
                    name    = "Mathematical Animation"
                    img_src = "/img/manim.png"
                    rating  = "3"
                    desc    = "Manim"
                />
                <Skill
                    name    = "Graphic Design"
                    img_src = "/img/gimp.png"
                    rating  = "1" 
                    desc    = "GIMP (Bitmap)"
                />
                <Skill
                    name    = "Video Editing"
                    img_src = "/img/videoediting.png"
                    rating  = "2"
                    desc    = "Hitfilm Express/iMovie"
                />
                <Skill
                    name    = "3D Modelling / Animation"
                    img_src = "/img/blender.png"
                    rating  = "1"
                    desc    = "Blender"
                />
            </SkillGroup>

            <SkillGroup id = 'other-skills' title = "Other Skills">
                <Skill
                    name    = "LaTeX"
                    img_src = "/img/latex.png"
                    rating  = "2"
                    desc    = "Formulas and equations"
                />
                <Skill
                    name    = "Robotics"
                    img_src = "/img/robotics.png"
                    desc    = "Software and hardware"
                    rating  = "2"
                /> 
                <Skill
                    name    = "Excel/Spreadsheets"
                    img_src = "/img/excel.png"
                    rating  = "2"
                />
                <Skill
                    name    = "Computer-Aided Design"
                    img_src = "/img/cad.png"
                    rating  = "0"
                    desc    = "Just getting started!"
                />
                <Skill
                    name    = "Public Relations"
                    img_src = "/img/instagram.png"
                    desc    = "Facebook, instagram, etc"
                    rating  = "2"
                />
                <Skill
                    name    = "Research/Academia"
                    img_src = "/img/research.png"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
            </SkillGroup>

            <SkillGroup id = 'qualities' title = "Qualities">
                <Skill
                    name    = "Fast Learner"
                    img_src = "/img/fastlearner.png"
                    rating  = "3"
                /> 
                <Skill
                    name    = "Timely"
                    img_src = "/img/timely.png"
                    desc    = "I don't procastinate!"
                    rating  = "3"
                />    
                <Skill
                    name    = "Persistent"
                    img_src = "/img/persistent.png"
                    rating  = "3"
                />       
                 <Skill
                    name    = "Adaptable"
                    img_src = "/img/adaptable.png"
                    rating  = "3"
                />       
                <Skill
                    name    = "Collaborative"
                    img_src = "/img/collaborative.png"
                    rating  = "3"
                />         
            </SkillGroup>

            <SkillGroup id = 'spoken-languages' title = "Spoken Languages">
                <Skill
                    name    = "English"
                    img_src = "/img/english.png"
                    desc    = "Native speaker"
                    rating  = "3"
                />
                <Skill
                    name    = "Spanish"
                    img_src = "/img/spanish.png"
                    desc    = "Elementary proficiency"
                    rating  = "2"
                />
            </SkillGroup>

        </StandardTemplate>
    );
}

export default Skills