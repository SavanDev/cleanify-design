import Style from './modules/style';
import { Observer } from './modules/observer';
import { getCookie } from './modules/cookies';

let observerEnable = true;
let switchStyles = true;

let styleCss = new Style();

window.onscroll = () => {
    styleCss.handleHeaderTitle(100);
}

if(observerEnable)
    Observer(() => {
        styleCss.handleDarkButton();
        styleCss.handleHeaderTitle(100);
        console.log("Changes detected in DOM");
    });

if(switchStyles) {
    window.onload = () => {
        styleCss.handleDarkButton();
    }

    if(getCookie("darkmode") != null) {
        styleCss.checkDarkMode();
    }
}