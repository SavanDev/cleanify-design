var tempBack;
var tempText;
var tempBubble;
var darkMode = false;

const darkmode = () => {
    let style = getComputedStyle(document.body);
    let root = document.documentElement;

    if (darkMode) {
        root.style.setProperty('--color-background', tempBack);
        root.style.setProperty('--color-text', tempText);
        root.style.setProperty('--color-bubble', tempBubble);
    } else {
        tempBack = style.getPropertyValue('--color-background');
        tempText = style.getPropertyValue('--color-text');
        tempBubble = style.getPropertyValue('--color-bubble');

        root.style.setProperty('--color-background', "#222020");
        root.style.setProperty('--color-text', "#f5f5f5");
        root.style.setProperty('--color-bubble', "#555");
    }

    darkMode = !darkMode;
};