document.addEventListener("DOMContentLoaded", () => {

    const languagesList = document.querySelector(".languagesList");
    const languages = document.getElementById("languages");
    
    
    languages.addEventListener("mouseup", function(){
    hidden = languagesList.getAttribute("hidden")
    if (hidden) {
        languagesList.removeAttribute("hidden");
        
    } else {
        languagesList.setAttribute("hidden", "hidden");
    }
    });
});