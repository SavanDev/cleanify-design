import { setCookie, getCookie } from './cookies';

export default class Style {
    constructor(location = "./css") {
        this.directoryCSS = location;
    }

    getLightMode() {
        return this.directoryCSS + "/cleanify.css";
    }

    getDarkMode() {
        return this.directoryCSS + "/cleanify-dark.css";
    }

    checkDarkMode() {
        if(document.getElementById('cleanifyCss') != null)
            document.getElementById('cleanifyCss').setAttribute('href', getCookie("darkmode") == 1 ? this.getLightMode() : this.getDarkMode());
        else
            console.log("Cleanify Design: Dark Mode not available.");
    }

    toggleDarkMode() {
        let cookie = getCookie("darkmode");
        setCookie("darkmode", cookie == 1 ? 2 : 1, 300);
        this.checkDarkMode();
    }

    handleDarkButton() {
        let darkButton = document.getElementById('darkToggle');
        if(darkButton != null)
            darkButton.onclick = () => { this.toggleDarkMode() }
    }

    handleHeaderTitle(max) {
        let title = document.getElementById('headerTitle');
        if(title != null) {
            let scrollValue = document.documentElement.scrollTop;

            if(scrollValue < max) {
                title.style.fontSize = 3.5 + -(scrollValue/max * 2) + 'rem';
                title.style.padding = 5 + -(scrollValue/max * 4) + 'rem';
            } else {
                title.style.fontSize = '1.5rem';
                title.style.padding = '1rem';
            }
        }
    }
}
