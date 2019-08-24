var lightModeCSS = "./css/cleanify.css";
var darkModeCSS = "./css/cleanify-dark.css";

let darkToggle;
let dynamicBool = true;

const darkmode = () => {
    darkToggle ? document.getElementById('cleanifyCss').setAttribute('href', lightModeCSS) : document.getElementById('cleanifyCss').setAttribute('href', darkModeCSS);
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
    growShrinkTitle();
}

if(dynamicBool) {
    let mutationObserver = new MutationObserver((mutations) => {
        dynamicChanges();
    });
    
    // Starts listening for changes in the root HTML element of the page.
    mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
}

window.onscroll = function () {
    growShrinkTitle()
};

function growShrinkTitle() {
    let Title = document.getElementById("headerTitle")
    let scrollValue = document.documentElement.scrollTop;
    let max = 100;

    if(scrollValue < max) {
        Title.style.fontSize = 3.5 + -(scrollValue/max * 2) + 'rem';
        Title.style.padding = 5 + -(scrollValue/max * 4) + 'rem';
    }
}