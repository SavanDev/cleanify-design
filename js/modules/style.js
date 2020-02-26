export default class Style {
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
