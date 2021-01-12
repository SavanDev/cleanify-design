export function HandleHeaderTitle()
{
    let title = document.getElementById('headerTitle');
    let navbar = document.getElementsByTagName('nav');

    if (title != null) {
        let headerHeight = navbar != null ? navbar[0].scrollHeight + title.scrollHeight : title.scrollHeight;
        let scrollTop = (document.body.scrollTop + document.documentElement.scrollTop);
        let scrollPercent = scrollTop / headerHeight;

        title.style.opacity = (String)(scrollPercent < 1 ? 1 - scrollPercent : 0);
    }
}

export function DarkMode()
{
    document.body.setAttribute("dark", "1");
}

export function LightMode()
{
    document.body.setAttribute("dark", "0");
}