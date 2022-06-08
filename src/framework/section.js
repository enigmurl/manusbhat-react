/**
 *  COPYRIGHT © 2022 MANU BHAT
 *  
 *  ALL RIGHTS RESERVED
 * 
 */


function Section(props) {
    if ("name" in props) {
        return (<section id = {props.id}>
                <span className="anchor-translator" id = {props.id +'-section'}/>
                <h1>{props.name}</h1>
                {props.children}
            </section>
        )
    }
    return (<section id = {props.id}>
                <span className="anchor-translator" id ={props.id +'-section'}/>
                {props.children}
            </section>
    )
}


export default Section;