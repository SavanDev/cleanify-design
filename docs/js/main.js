let style = getComputedStyle(document.body);

var tempBack = style.getPropertyValue('--color-background');
var tempText = style.getPropertyValue('--color-text');
var tempCont = style.getPropertyValue('--color-container');
var tempBackText = style.getPropertyValue('--color-back-text');
var tempButton = style.getPropertyValue('--color-button');
var darkMode = false;

const darkmode = () => {
    let root = document.documentElement;

    if (darkMode) {
        root.style.setProperty('--color-background', tempBack);
        root.style.setProperty('--color-text', tempText);
        root.style.setProperty('--color-container', tempCont);
        root.style.setProperty('--color-back-text', tempBackText);
        root.style.setProperty('--color-button', tempButton);
    } else {
        root.style.setProperty('--color-background', "#222020");
        root.style.setProperty('--color-text', "#f5f5f5");
        root.style.setProperty('--color-container', "#555");
        root.style.setProperty('--color-back-text', "#555");
        root.style.setProperty('--color-button', "#555");
    }

    darkMode = !darkMode;
};