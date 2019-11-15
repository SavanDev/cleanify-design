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
        document.getElementById('cleanifyCss').setAttribute('href', getCookie("darkmode") == 1 ? this.getLightMode() : this.getDarkMode());
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
                title.style.opacity = 1 - (scrollValue/max);
            } else {
                title.style.opacity = 0;
            }
        }
    }
}
