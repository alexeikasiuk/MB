// main navigation
let navItems = document.querySelectorAll(".topnav a");
let sections = document.querySelectorAll(".section");

navItems.forEach(function (item, i, arr) {
    item.addEventListener("click", changeNav)
});

function changeNav(e) {
    navItems.forEach(function (item, i, arr) {
        item.className = "";
    })
    sections.forEach(function (item, i, arr) {
        item.className = item.className.replace(" active", "");
    })
    e.target.className += " active";
    document.querySelector((".section[type='" + e.target.type + "']")).className += " active";
}