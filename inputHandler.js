const files = {
  propertyrates: [
    "17weY686mdczym2pR1gO8K_u8ApWM79Vn",
    "1QV2jswXznnl96LX7rd2RL10XXbTlUuvf",
  ],
  generalroll: ["", "1LX_ciONnfraaqVKKQKvpAx6R9keR__JM"],
};
const links = {
  revenue:
    "https://docs.google.com/forms/d/e/1FAIpQLSfS5FRbx0h04JPrrV-dKI_YMG98FEWRL3etvIFmeQiWvYylUw/viewform?embedded=true",
  objections:
    "https://docs.google.com/forms/d/e/1FAIpQLScSkQ5PY-q5oj4WaVRbE0cTrS5wJdO1u2hi2EdtA9c5aRg8WA/viewform?embedded=true",
  sales:
    "https://docs.google.com/forms/d/e/1FAIpQLSetLh2iLYRyAA6V6DyY8ucJMGtyO_UEbW7LdWoQ6DLUHqN2vw/viewform?embedded=true",
  renovation:
    "https://docs.google.com/forms/d/e/1FAIpQLSdrWwMBfX_kz870Jc7lu-FSt98J6jLxZrcxf-AqSrbkBlfcuw/viewform?embedded=true",
};


function moveTo(destination) {
  const element = document.getElementById(destination);
  element.scrollIntoView();
}

function displayMap(destination) {
  document.getElementById("map_embed").src =
    "map_" + destination + "/index.html";
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
  const form = (document.getElementById("submission-form").src = links[target]);
  form.classList.contains("closed")
    ? form.classList.remove("closed")
    : form.classList.add("closed");
}

function changeToGVR() {
  const gvr = document.getElementById("gvr22");
  gvr.classList.remove("invisible");
}

function changeDocumentFrame(menu, index) {
  document.getElementById("downloads").src =
    "https://drive.google.com/file/d/" + files[menu][index] + "/preview";
}

function revealExtra(menuItem) {
  let menuSection = document.getElementById("menu-" + menuItem);
  let paragraphs = menuSection.getElementsByTagName("ul");
  para = paragraphs[0];
  para.classList.add("visible");
  document
    .querySelector(
      "section#documents  div#document-container  aside  div#document-menu  ul  li#menu-" +
        menuItem +
        " img.arrow.up"
    )
    .classList.remove("invisible");
  document
    .querySelector(
      "section#documents  div#document-container  aside  div#document-menu  ul  li#menu-" +
        menuItem +
        " img.arrow.down"
    )
    .classList.add("invisible");
}

function hideExtra(menuItem) {
  let menuSection = document.getElementById("menu-" + menuItem);
  let paragraphs = menuSection.getElementsByTagName("ul");
  para = paragraphs[0];
  para.classList.remove("visible");
  document
    .querySelector(
      "section#documents  div#document-container  aside  div#document-menu  ul  li#menu-" +
        menuItem +
        " img.arrow.up"
    )
    .classList.add("invisible");
  document
    .querySelector(
      "section#documents  div#document-container  aside  div#document-menu  ul  li#menu-" +
        menuItem +
        " img.arrow.down"
    )
    .classList.remove("invisible");
}


