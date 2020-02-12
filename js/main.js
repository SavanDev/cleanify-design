import Style from './modules/style';
import { Observer } from './modules/observer';

let observerEnable = true;

let styleCss = new Style();

window.onscroll = () => {
    styleCss.handleHeaderTitle(100);
}

if(observerEnable)
    Observer(() => {
        styleCss.handleHeaderTitle(100);
        console.log("Cleanify: Changes detected in DOM");
    });