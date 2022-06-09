import React from "react";

const allowCompiling = false;

class Compiler extends React.Component {
    compileFile() {
        console.log("Compiling file", window.location.href)
        
    }

    render() {
        const compileButton = allowCompiling ? 
            <button onClick={this.compileFile} style={{
                position: "fixed",
                zIndex : "100"
            }}>
                Compile
            </button> : []

        return (
            <div className="compiler">
                {compileButton}
                {this.props.children}
            </div>
        )
    }
}

export default Compiler;