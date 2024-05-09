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
