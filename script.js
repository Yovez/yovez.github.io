'use strict';

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block"
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
    document.getElementById("source").innerHTML = "";
    const href = element.getAttribute("href");
    if (href && href != 'null') {
        const source = <a href={href}>Source</a>
        ReactDOM.render(source, document.getElementById("source"));
    }
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

const copyRight = <p class="w3-padding-32 w3-center">&copy; Copyright 2019 - {new Date().getFullYear()}, Yovurse</p>;
ReactDOM.render(copyRight, document.getElementById("footer"));


function gtag() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push(arguments);
}

function loadGTag() {
    gtag('js', new Date());
    gtag('config', 'UA-148896778-1');
}

window.addEventListener('load', loadGTag, false);

/* class/styling options that aren't used anymore:
class:
w3-container

styles:
margin-top:75px
*/
// document.getElementById("footer").onload = function() {getCopyRight()};
