var lightModeCSS = "./css/cleanify.min.css";
var darkModeCSS = "./css/cleanify-dark.min.css";

let darkToggle;

const darkmode = () => {
    if (darkToggle) {
        document.getElementById('cleanifyCss').setAttribute('href', lightModeCSS);
    } else {
        document.getElementById('cleanifyCss').setAttribute('href', darkModeCSS);
    }

    darkToggle = !darkToggle;
};

document.getElementById("darkToggle").addEventListener("click", darkmode)