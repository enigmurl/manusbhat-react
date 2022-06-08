/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

import React from "react";
import {StandardTemplate} from "../framework/standard_template";

import "../css/globals.css"
import "../css/extracurriculars.css"
import { Skill, SkillGroup } from "../framework/skill_list";

function Extracurricular(props) {
    if ("img_src" in props) {
        return <Skill
            name={props.name}
            desc={props.desc}
            img_src={props.img_src}
            href = {props.href}
            font-size="12px"
        />
    }

    return (
        <Skill
            name={props.name}
            desc={props.desc}
            href = {props.href}
            font-size="12px"

        />
    )
}

/* EXTRACURRICULARS
 - stuff like gdc, split into high school and no high school
*/
function Extracurriculars() {
    return (
        <StandardTemplate active = 'Extracurriculars'> 

            <SkillGroup id = 'college' title="College">
                <Extracurricular
                    name    = "Nothing yet..."
                    desc  = ""
                />
            </SkillGroup>
            
            <SkillGroup id = 'high-school' title="High School">
                <Extracurricular
                    name  = "Game Dev Club"
                    desc  = "2019-22 | President. Taught 30 members Unity via hands-on workshops. Incorporated elaborate topics (e.g. terrain generation)."
                    img_src = "/img/gdc.png"

                    href  = "https://gamedevclub.tech/"
                />
                <Extracurricular
                    name  = "Tino Competitive Programming"
                    desc  = "2020-22 | Advanced Mentor. Presented high-level algorithms and sample problems, even coming up with my own challenges."
                    img_src = "/img/compprog.png"

                />
                <Extracurricular
                    name  = "Tinovation"
                    desc  = "2020-22 | PR & Android Mentor. Managed promo material and photographed meetings. Oversaw creation of Android app."
                    img_src = "/img/tinovation.png"

                    href = "https://tinovationchs.github.io/"
                />
                <Extracurricular
                    name  = "Melon Jam"
                    desc  = "2021-22 | Lead Organizer. Hosted a game jam of ~100 people, introducing many novices to game development."
                    img_src = "/img/melonjam.png"

                    href = "https://gamedevclub.tech/melonjam/"
                />
                <Extracurricular
                    name  = "Atlas Hacks II (Hackathon)"
                    desc  = "2021 | Logistics Director. Responsible for special events (e.g. guest speakers). Organized sponsorship selection."
                    img_src = "/img/atlashacks.png"

                />
                <Extracurricular
                    name  = "FTC Robotics (#11466)"
                    desc  = "2019-20 | Software Lead. Helped design robot's strategy, hardware, and software. Chosen to be Mechanisms Driver."
                    img_src = "/img/ftc.png"
                />
                <Extracurricular
                    name  = "Tino Aviation and Rocketry"
                    desc  = "2018-22 | Member. Engineered recovery system of a model rocket. Designed and simulated mock trajectories using CAD."
                    img_src = "/img/tinoarc.png"
                />
                <Extracurricular
                    name  = "Tech Challenge"
                    desc  = "2018-2020 | Participant. Applied iterative design to real-world problem statements. Logged schematics to engineering journal."
                    img_src = "/img/techchallenge.png"
                />
            </SkillGroup>

        </StandardTemplate>
    );
}

export default Extracurriculars;