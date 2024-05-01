
function changeToForm(target) {
    const forms = document.getElementsByTagName("iframe");
    for (let i = 0; i < forms.length; i++) {
        forms[i].classList.add("invisible");
    }

    const desiredForm = document.getElementById(target+"_form");
    desiredForm.classList.remove("invisible");
    const heading = document.getElementById("content_heading");
    heading.innerHTML = target +  " Form";

}


function changeToMap() {
    const forms = document.getElementsByTagName("iframe");
    for (let i = 0; i < forms.length; i++) {
        forms[i].classList.add("invisible");
    }
    const map = document.getElementById("map_embed");
    map.classList.remove("invisible");

    const heading = document.getElementById("content_heading");
    heading.innerHTML = "Mappppp";
}

function changeToGVR() {
    const forms = document.getElementsByTagName("iframe");
    for (let i = 0; i < forms.length; i++) {
        forms[i].classList.add("invisible");
    }
    
    const gvr = document.getElementById("gvr22")
    gvr.classList.remove("invisible");
    const heading = document.getElementById("content_heading");
    heading.innerHTML = "GVR";
}
function changeToDownloads() {
    const forms = document.getElementsByTagName("iframe");
    for (let i = 0; i < forms.length; i++) {
        forms[i].classList.add("invisible");
    }
    
    const down = document.getElementById("downloads");
    down.classList.remove("invisible");
    const heading = document.getElementById("content_heading");
    heading.innerHTML = "Downloads";
}