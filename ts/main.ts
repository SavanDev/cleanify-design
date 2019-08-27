import Style from './modules/Style';
import Observer from './modules/Observer';
import { getCookie } from "./modules/Cookies";

let observerEnable = true;

let styleCss = new Style(false);

window.onload = () => {
    styleCss.handleDarkButton();
}

window.onscroll = () => {
    styleCss.handleHeaderTitle(100);
}

if(observerEnable)
    Observer(() => {styleCss.handleDarkButton()});

if(getCookie("darkmode") != null) {
    styleCss.setDark(true);
    styleCss.checkDarkMode();
}