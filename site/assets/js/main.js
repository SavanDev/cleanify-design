let darkState = false;

function darkMode() {
    document.body.setAttribute("dark", darkState ? "0" : "1");
    darkState = !darkState;
}

document.getElementById("darkToggle").onclick = darkMode;