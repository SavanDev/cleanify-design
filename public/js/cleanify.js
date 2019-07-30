var lightModeCSS = "./css/cleanify.css";
var darkModeCSS = "./css/cleanify-dark.css";

let darkToggle;

const darkmode = () => {
    if (darkToggle) {
        document.getElementById('cleanifyCss').setAttribute('href', lightModeCSS);
    } else {
        document.getElementById('cleanifyCss').setAttribute('href', darkModeCSS);
    }

    darkToggle = !darkToggle;
};

const dynamicChanges = () => {
    let darkToggle = document.getElementById("darkToggle");
    let fullHeader = document.getElementsByClassName("full");

    darkToggle.addEventListener("click", darkmode);
    for (let index = 0; index < fullHeader.length; index++) {
        const element = fullHeader[index];
        element.style.backgroundImage = "url(" + element.getAttribute("data-src") + ")";
    }
}

window.onload = () => {
    dynamicChanges();
}

let mutationObserver = new MutationObserver((mutations) => {
    dynamicChanges();
});

// Starts listening for changes in the root HTML element of the page.
mutationObserver.observe(document.documentElement, {
    childList: true,
    subtree: true
});