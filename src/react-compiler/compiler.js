import React from "react";

const allowCompiling = true;

const appElementName = "app";
const template = 
`
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Manu Bhat</title>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">

    <!-- Page Preview Information -->
    <meta name="description" content="Welcome! My name is Manu Bhat. Among other things, I'm a student, developer, and explorer. You can learn more about all of that right here!">
    <meta property="og:description" content="Welcome! My name is Manu Bhat. Among other things, I'm a student, developer, and explorer. You can learn more about all of that right here!">
    <meta property="twitter:description" content="Welcome! My name is Manu Bhat. Among other things, I'm a student, developer, and explorer. You can learn more about all of that right here!">
    
    <meta name="keywords" content="Manu Bhat, Manu Shankar Bhat, Manu, Students, Computer Science, Game Development, App Development, Web Development, Development, Digital Art, Business, Entrepeneur">
    
    <meta property="og:title" content="Manu Bhat">
    <meta property="twitter:title" content="Manu Bhat">

    <meta property="og:image" content="img/preview.webp">
    <meta property="twitter:image" content="img/preview.webp">

    <meta property="og:url" content="https://manusbhat.github.io">

    <link rel="shortcut icon" href="img/icon.webp"/>
    
    <!-- Scripts -->
    <script type="module" defer="" src="/js/navbar.js"></script>
    <script type="module" defer="" src="/js/sidebar.js"></script>
    <script type="module" defer="" src="/js/utilities.js"></script>

    <script type="module" defer="" src="/js/IMPORT.js"></script>

    <!-- Stylesheets -->
    <link rel="stylesheet" href="/css/globals.css">
    <link rel="stylesheet" href="/css/navbar.css">
    <link rel="stylesheet" href="/css/sidebar.css">
    <link rel="stylesheet" href="/css/footer.css">
    <link rel="stylesheet" href="/css/skill_list.css">

    <link rel="stylesheet" href="/css/IMPORT.css">

  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    CONTENT
  </body>
</html>
`
function compileNode(node) {
    //compile this
    const tag = node.tagName.toLowerCase();
    
    var start = `<${tag} `

    for (const attr of node.attributes) {
        start += attr.name + '="' + attr.value + '" '
    }

    start += '>'
    var child = ``;

    for (const c of node.children) {
        child += compileNode(c);
    }

    child += node.innerText;

    const end = `</${tag}>`

    //end this

    return start + child + end;
}

class Compiler extends React.Component {
    

    compileFile() {
        // get rid of the '/'
        const outputFile = window.location.pathname.substring(1) || "index.html"; 
        console.log("* Compiling to file:", outputFile);

        const raw = outputFile.replace(".html","");

        const app = document.getElementById(appElementName);

        const html = template.replace("CONTENT", app.innerHTML).replaceAll("IMPORT", raw);
        console.log("~~~~",outputFile,"~~~~");
        console.log(html);

    }

    render() {
        const compileButton = allowCompiling ? 
            <button onClick={this.compileFile} style={{
                position: "fixed",
                zIndex : "100",
                width : "200px",
                height: "100px"
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