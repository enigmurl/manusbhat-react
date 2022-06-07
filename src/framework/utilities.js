
function scrollTo(id) {
    const rect = document.getElementById(id).getBoundingClientRect();
    // worth centering???
    const yPos = rect.top + window.scrollY - window.innerHeight / 4;
    window.scrollTo(0, yPos)
}

export default scrollTo;