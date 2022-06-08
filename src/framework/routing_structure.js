/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */

const routing_dicitionary = {
    "Academics | Honors" : {
        href:"/academics.html",
        submenu:[
            {
                name:"Honors",
                id:"honors"
            }, 
            {
                name:"UCSD",
                id:"ucsd"
            }, 
            {
                name:"CHS",
                id:"chs"
            }
        ]
    },
    Contact :   {
        href:"/contact.html",
        submenu:[
        ]
    },
    Extracurriculars : {
        href:"/extracurriculars.html",
        submenu:[
            {
                name:"College",
                id:"college"
            }, {
                name:"High School",
                id:"high-school"
            }
        ]
    },
    Home : {
        href:"/index.html",
        submenu:[
        ]
    },
    Skills :  {
        href:"/skills.html",
        submenu:[
            {
                name:"Computer Science",
                id:"computer-science"
            }, 
            {
                name:"Coding Languages",
                id:  "coding-languages"
            }, 
            {
                name:"Digital Art",
                id:"digital-art"
            }, 
            {
                name:"Other Skills",
                id:"other-skills"
            }, 
            {
                name:"Qualities",
                id:"qualities"
            }, 
            {
                name:"Spoken Languages",
                id:"spoken-languages"
            }
        ]
    },
    "Work | Large Projects" : {
        href:"/work.html",
        submenu:[
            {
                name:"Work",
                id:"work"
            }
            , {
                name:"Large Projects",
                id:"large-projects"
            }
        ]
    },
};

export default routing_dicitionary;