let darkState = localStorage['dark'] || 0;

function darkMode()
{
    darkState == "1" ? darkState = 0 : darkState = 1;
    document.body.setAttribute("dark", darkState);
    localStorage['dark'] = darkState;
}

if (darkState == 1)
{
    document.body.setAttribute("dark", 1);
}

document.getElementById("darkToggle").onclick = darkMode;