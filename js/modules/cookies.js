export const setCookie = (name, value, days) => {
    let expires = new Date();
    expires.setTime(expires.getTime() + (24 * (60 ** 2) * 1000) * days);
    document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString();
}

export const getCookie = (name) => {
    let startIndex = document.cookie.indexOf(name);
    if (startIndex != -1) {
        let endIndex = document.cookie.indexOf(";", startIndex);
        if (endIndex == -1) endIndex = document.cookie.length;
        return unescape(document.cookie.substring(startIndex + name.length + 1, endIndex));
    } else {
        return null;
    }
}