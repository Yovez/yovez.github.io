// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

function getDate() {
    return new Date();
}

function getFullYear() {
    return getDate().getFullYear();
}

function setNavBar() {
    var navBar = "<a href=\"#\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button w3-hover-white\">Home</a>" +
    "<a href=\"#packages\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button w3-hover-white float\">Packages</a> " +
    "<a href=\"#showcase\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button w3-hover-white float\">Showcase</a>" +
    "<a href=\"#services\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button w3-hover-white float\">Services</a> " +
    "<a href=\"/aboutme/\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button w3-hover-white float\">About Me</a> " +
    "<a href=\"#contact\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button w3-hover-white float\">Contact</a>" +
    "<a href=\"https://panel.yovurse.com\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button w3-hover-white float\">Login</a>"
    document.getElementById("js-navbar").innerHTML = navBar;
}

function setCopyRight() {
    var copyright = "&copy; Copyright 2019 - {year}, Yovurse"
    var year = getFullYear();
    var res = copyright.replace("{year}", year.toString());
    var htmlFooter = "<p class=\"w3-padding-32 w3-center\" style=\"padding-right:58px\">" + res + "</p>";
    document.getElementById("footer").innerHTML = htmlFooter;
}

function gtag() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push(arguments);
}

function loadGTag() {
    gtag('js', new Date());
    gtag('config', 'UA-148896778-1');
}

function goToIndex() {
    if (window.location.href === "http://yovurse.com" || window.location.href === "yovurse.com") {
        window.location.replace("http://yovurse.com/yovurse");
        return false;
    }
}

window.addEventListener('load', loadGTag, false);
window.addEventListener('load', goToIndex, false);
window.addEventListener('load', setNavBar, false);
window.addEventListener('load', setCopyRight, false);

/* class/styling options that aren't used anymore:
class:
w3-container

styles:
margin-top:75px
*/
// document.getElementById("footer").onload = function() {getCopyRight()};
