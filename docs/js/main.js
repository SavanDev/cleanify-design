var lightModeCSS = "./css/cleanify.css";
var darkModeCSS = "./css/cleanify-dark.css";

let darkMode;

const darkmode = () => {
    if (darkMode) {
        document.getElementById('cleanifyCss').setAttribute('href', lightModeCSS);
    } else {
        document.getElementById('cleanifyCss').setAttribute('href', darkModeCSS);
    }

    darkMode = !darkMode;
};