export const getCookie = (name : string) => {
    let startIndex = document.cookie.indexOf(name);
    if (startIndex !== -1) {
        let endIndex = document.cookie.indexOf(";", startIndex);
        if (endIndex === -1) endIndex = document.cookie.length;
        return unescape(document.cookie.substring(startIndex + name.length + 1, endIndex));
    } else {
        return null;
    }
}

export const getDarkMode = () => {
    if(getCookie("darkmode") != null) {
        return getCookie("darkmode") === "1" ? true : false;
    } else {
        return false;
    }
}