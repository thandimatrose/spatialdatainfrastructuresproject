
function changeToForm(target) {
    const forms = document.getElementsByTagName("iframe");
    for (let i = 0; i < forms.length; i++) {
        forms[i].classList.add("invisible");
    }

    const desiredForm = document.getElementById(target+"_form");
    desiredForm.classList.remove("invisible");
    

}


function changeToMap() {
    const forms = document.getElementsByTagName("iframe");
    for (let i = 0; i < forms.length; i++) {
        forms[i].classList.add("invisible");
    }
    const map = document.getElementById("map_embed");
    map.classList.remove("invisible");
}

function changeToGVR() {
    const forms = document.getElementsByTagName("iframe");
    for (let i = 0; i < forms.length; i++) {
        forms[i].classList.add("invisible");
    }
    
    const gvr = document.getElementById("gvr22")
    gvr.classList.remove("invisible");
    
}
function changeToDownloads() {
    const forms = document.getElementsByTagName("iframe");
    for (let i = 0; i < forms.length; i++) {
        forms[i].classList.add("invisible");
    }
    
    const down = document.getElementById("downloads");
    down.classList.remove("invisible");
    
}