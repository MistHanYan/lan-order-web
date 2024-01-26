
export function setCookie(name, value, days){
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue = encodeURIComponent(value) + (days ? "; expires=" + expirationDate.toUTCString() : "");
    document.cookie = name + "=" + cookieValue + "; path=/";
}

export function getCookie(cookieName){
    const cookieString = document.cookie;
    const cookieArray = cookieString.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].trim();
        const cookiePair = cookie.split("=");

        if (cookiePair[0] === cookieName) {
            return cookiePair[1];
        }
    }

    return null;
}

export function isEmptyToken(){
    return getCookie("token") != null;
}