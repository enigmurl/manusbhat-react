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
                    img_src = "/img/algorithms.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "Data Structures"
                    desc    = "Extremely proficient"
                    img_src = "/img/datastructures.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "Machine Learning/AI"
                    img_src = "/img/aiml.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "Web Development"
                    desc    = "React"
                    img_src = "/img/webdev.webp"
                    rating  = "2"
                />
                <Skill
                    name    = "App Development"
                    desc    = "Android and iOS"
                    img_src = "/img/appdev.webp"
                    rating  = "2"
                />
                <Skill
                    name    = "Game Development"
                    desc    = "Unity and OpenGL/Metal"
                    img_src = "/img/gamedev.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "Terminal/Shellscript"
                    desc    = "Zsh and Vim"
                    img_src = "/img/terminal.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "Multi Threading"
                    img_src = "/img/multithreading.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "Memory Management"
                    img_src = "/img/memorymanagement.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "Version Control System"
                    desc    = "Git"
                    img_src = "/img/vcs.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "Operating Systems"
                    img_src = "/img/os.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "Compilers"
                    img_src = "/img/compilers.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "Bioinformatics"
                    img_src = "/img/bioinformatics.webp"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Computer Vision"
                    img_src = "/img/computervision.webp"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Networking"
                    img_src = "/img/networking.webp"
                    desc    = "How the internet works"
                    rating  = "0"
                />
                <Skill
                    name    = "Regular Expressions"
                    img_src = "/img/regex.webp"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Distributed Systems"
                    img_src = "/img/distributedsystems.webp"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Cloud Computing"
                    img_src = "/img/cloudcomputing.webp"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Server Design"
                    img_src = "/img/serverdesign.webp"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Cryptography"
                    img_src = "/img/crypto.webp"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Quantum Computing"
                    img_src = "/img/quantum.webp"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Virtual/Augmented Reality"
                    img_src = "/img/virtualreality.webp"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
                <Skill
                    name    = "Digital Signal Processing"
                    img_src = "/img/dsp.webp"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
            </SkillGroup>

            <SkillGroup id = 'coding-languages' title="Coding Languages">
                <Skill
                    name    = "C99"
                    img_src = "img/c99.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "C++11"
                    img_src = "/img/c++11.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "Java 1.8"
                    img_src = "/img/java1.8.webp"
                    rating  = "3"
                />
                 <Skill
                    name    = "Swift 5"
                    img_src = "/img/swift5.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "Python 3"
                    img_src = "/img/python3.webp"
                    rating  = "2"
                />
                <Skill
                    name    = "C# 10"
                    img_src = "/img/csharp10.webp"
                    rating  = "1"
                />
                <Skill
                    name    = "Typescript/Javascript ES6"
                    img_src = "/img/javascriptes6.webp"
                    rating  = "1"
                />
               <Skill
                    name    = "Object-oriented Programming"
                    img_src = "/img/oop.webp"
                    rating  = "3"
                />
                <Skill
                    name    = "Procedural Programming"
                    img_src = "/img/procedural.webp"
                    rating  = "3"
                />
            </SkillGroup>

            <SkillGroup id = 'digital-art' title = "Digital Art"> 
                <Skill
                    name    = "Mathematical Animation"
                    img_src = "/img/manim.webp"
                    rating  = "3"
                    desc    = "Manim"
                />
                <Skill
                    name    = "Graphic Design"
                    img_src = "/img/gimp.webp"
                    rating  = "1" 
                    desc    = "GIMP (Bitmap)"
                />
                <Skill
                    name    = "Video Editing"
                    img_src = "/img/videoediting.webp"
                    rating  = "2"
                    desc    = "Hitfilm Express/iMovie"
                />
                <Skill
                    name    = "3D Modelling / Animation"
                    img_src = "/img/blender.webp"
                    rating  = "1"
                    desc    = "Blender"
                />
            </SkillGroup>

            <SkillGroup id = 'other-skills' title = "Other Skills">
                <Skill
                    name    = "LaTeX"
                    img_src = "/img/latex.webp"
                    rating  = "2"
                    desc    = "Formulas and equations"
                />
                <Skill
                    name    = "Robotics"
                    img_src = "/img/robotics.webp"
                    desc    = "Software and hardware"
                    rating  = "2"
                /> 
                <Skill
                    name    = "Excel/Spreadsheets"
                    img_src = "/img/excel.webp"
                    rating  = "2"
                />
                <Skill
                    name    = "Computer-Aided Design"
                    img_src = "/img/cad.webp"
                    rating  = "0"
                    desc    = "Just getting started!"
                />
                <Skill
                    name    = "Public Relations"
                    img_src = "/img/instagram.webp"
                    desc    = "Facebook, instagram, etc"
                    rating  = "2"
                />
                <Skill
                    name    = "Research/Academia"
                    img_src = "/img/research.webp"
                    desc    = "Just getting started!"
                    rating  = "0"
                />
            </SkillGroup>

            <SkillGroup id = 'qualities' title = "Qualities">
                <Skill
                    name    = "Fast Learner"
                    img_src = "/img/fastlearner.webp"
                    rating  = "3"
                /> 
                <Skill
                    name    = "Timely"
                    img_src = "/img/timely.webp"
                    desc    = "I don't procastinate!"
                    rating  = "3"
                />    
                <Skill
                    name    = "Persistent"
                    img_src = "/img/persistent.webp"
                    rating  = "3"
                />       
                 <Skill
                    name    = "Adaptable"
                    img_src = "/img/adaptable.webp"
                    rating  = "3"
                />       
                <Skill
                    name    = "Collaborative"
                    img_src = "/img/collaborative.webp"
                    rating  = "3"
                />         
            </SkillGroup>

            <SkillGroup id = 'spoken-languages' title = "Spoken Languages">
                <Skill
                    name    = "English"
                    img_src = "/img/english.webp"
                    desc    = "Native speaker"
                    rating  = "3"
                />
                <Skill
                    name    = "Spanish"
                    img_src = "/img/spanish.webp"
                    desc    = "Elementary proficiency"
                    rating  = "2"
                />
            </SkillGroup>

        </StandardTemplate>
    );
}

export default Skills