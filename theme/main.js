var toggle = document.querySelector("#theme-toggle");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (storedTheme){
    document.body.setAttribute('data-theme', storedTheme)
}
toggle.onclick = function() {
    var currentTheme = document.body.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.body.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};

