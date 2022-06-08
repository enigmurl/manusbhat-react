/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

 import React from "react";
 import Section from "./section";
 import "../css/globals.css"
 import "../css/skill_list.css"

 function SkillGroup(props) {
    return (
        <Section id={props.id} name = {props.title}>
            <div className="skill-group">
                {props.children}
            </div>
        </Section>
    )
}

 function Skill(props) {
    // rating and image are optional

    const image = "img_src" in props ? 
        <img className="skill-image" src = {props.img_src} alt = {props.name}/>
        : [];
    var rating = [];
    if ("rating" in props) {
        const count = parseInt(props.rating);
        if (count === 0) {
            rating = <p className="skill-rating">&#9734;&#9734;&#9734;</p>;
        } else if (count === 1) {
            rating = <p className="skill-rating">&#9733;&#9734;&#9734;</p>
        } else if (count === 2) {
            rating = <p className="skill-rating">&#9733;&#9733;&#9734;</p>;
        } else {
            rating = <p className="skill-rating">&#9733;&#9733;&#9733;</p>;
        }
    }

    const font_style = "font-size" in props ? {fontSize: props["font-size"]} : {};
    const title_style = props.href ? {textDecoration : "underline"} : {}
    return (
        <li className="skill-item">
            <span className="skill-circle"/>
            {/* right  */}
                <a href={props.href} target="_blank" rel="noopener noreferrer">
                <span className="skill-rectangle">
                    {/* image on left, title up, subheader below it, rating on the right */}
                        {image}
                        <span className="skill-text">
                            <p className="skill-title" style={title_style}>{props.name}</p>
                            <p className="skill-description" style={font_style}>{props.desc}</p>
                        </span>
                        {rating}
                    </span>
                </a>
        </li>
    )
}

export {Skill, SkillGroup};