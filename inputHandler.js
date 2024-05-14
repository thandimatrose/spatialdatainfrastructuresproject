const links = {
  revenue:
    "https://docs.google.com/forms/d/e/1FAIpQLSdtOFyB0qwP6jR0lRA8EKX9hAfYD4tjGpUXnniCwulcqKgBvQ/viewform?embedded=true",
  objections:
    "https://docs.google.com/forms/d/e/1FAIpQLSdoRZKVuL7TgrbANxSFTdoxuJxP02K3VyeruvOGURYdzIKosA/viewform?embedded=true",
  sales:
    "https://docs.google.com/forms/d/e/1FAIpQLScvB5WbWNVOP7bt_SMDUdxEz6g5nUY8js90VjJsKL3lY0yatg/viewform?embedded=true",
};
function moveTo(destination) {
    const element = document.getElementById(destination);
    element.scrollIntoView();
}

function displayMap(destination) {
  document.getElementById("map_embed").src = "map_"+destination+"/index.html";
}

function openFullscreen() {
  globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  elem = document.getElementById("map-container");
  elem.classList = "fullscreen";

  document.getElementById("body").classList = "fullscreen";

  render = document.getElementById("map_embed");
  document.getElementById("map_embed").src = render.src; 

}
function closeFullscreen() {
  

  elem = document.getElementById("map-container");
  elem.classList = "";

  document.getElementById("body").classList = "";

  render = document.getElementById("map_embed");
  document.getElementById("map_embed").src = render.src;

  

  const element = document.getElementById("geoportal");
  element.scrollIntoView();
  
}


function changeToForm(target) {
    document.getElementById("submission-form").src = links[target];
    
}

function toggleSubmissionFrame() {
    const form = document.getElementById("submission-form").src = links[target];
    form.classList.contains("closed")
      ? form.classList.remove("closed")
      : form.classList.add("closed");
}


function changeToGVR() {
  
    const gvr = document.getElementById("gvr22")
    gvr.classList.remove("invisible");
    
}
