import { setCookie } from "./Cookies";

class Style {
    private minCSS : boolean;
    private directoryCSS = "./css";
    private darkToggle = false;

    constructor(minified : boolean,location? : string) {
        this.minCSS = minified;
        if(location != null)
            this.directoryCSS = location;
    }

    public setDark(dark : boolean) {
        this.darkToggle = dark;
    }

    public getLightMode() : string {
        return this.minCSS ? this.directoryCSS + "/cleanify.min.css" : this.directoryCSS + "/cleanify.css";
    }

    public getDarkMode() : string {
        return this.minCSS ? this.directoryCSS + "/cleanify-dark.min.css" : this.directoryCSS + "/cleanify-dark.css";
    }

    public checkDarkMode() {
        document.getElementById('cleanifyCss').setAttribute('href', this.darkToggle ? this.getLightMode() : this.getDarkMode());
    }

    public toggleDarkMode() : any {
        this.checkDarkMode();
        this.darkToggle ? setCookie("darkmode", "ok", -10) : setCookie("darkmode", "ok", 10);
        this.darkToggle = !this.darkToggle;
    }

    public handleDarkButton() {
        let darkButton = document.getElementById('darkToggle');

        darkButton.addEventListener("click", this.toggleDarkMode());
    }

    public handleHeaderTitle(max : number) {
        let title = document.getElementById('headerTitle');
        let scrollValue = document.documentElement.scrollTop;

        if(scrollValue < max) {
            title.style.fontSize = 3.5 + -(scrollValue/max * 2) + 'rem';
            title.style.padding = 5 + -(scrollValue/max * 4) + 'rem';
        }
    }
}

export default Style;