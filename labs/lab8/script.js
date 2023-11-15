let inDarkMode = false;

function toggleTheme() {
    let bodyElement = document.querySelector("body");
    if (inDarkMode) { // not in dark mode, want to set dark mode
        bodyElement.classList.remove("dark-mode");
        inDarkMode = false;
    } else {
        bodyElement.classList.add("dark-mode");
        inDarkMode = true;
    }
}


let buttonVariable =  document.getElementById("toggleButton")
buttonVariable.onclick = toggleTheme;


