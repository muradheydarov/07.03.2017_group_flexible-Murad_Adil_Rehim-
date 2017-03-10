// sliderin balaca sekilleri deyisir
var murad = true;

function click_me() {
    if (murad) {
        document.getElementById("search").style.width = "180px";
        murad = false;
    } else {
        document.getElementById("search").style.width = "86px"
        murad = true;
    }
}

// slider buttonlarnan deyisir
function changeCover(a) {

    var imgSrc = a.getElementsByTagName("img")[0].src;
    document.getElementById("slider").style.background = "url(" + imgSrc + ")"
}
images = ["img/slider/slide1_bg.jpg", "img/slider/slide2_bg.jpg", "img/slider/slide3_bg.jpg"];
var i = 0

var k = document.querySelectorAll(".slider_button_middle div img")

function next() {
    i++;
    if (i == k.length) {
        i = 0;
    }
    for (var g = 0; g < k.length; g++) {
        document.querySelectorAll(".slider_button_middle div")[g].style.border = "none";
    }
    document.querySelectorAll(".slider_button_middle div")[i].style.border = "3px solid white"
    document.querySelectorAll(".slider_button_middle div")[i].style.boxSizing = "border-box"
    document.getElementById("slider").style.backgroundImage = "url(" + k[i].src + ")";
}

function prew() {
    i--;
    if (i == -1) {
        i = k.length - 1;
    }
    for (var g = 0; g < k.length; g++) {
        document.querySelectorAll(".slider_button_middle div")[g].style.border = "none";
    }
    document.querySelectorAll(".slider_button_middle div")[i].style.border = "3px solid white"
    document.querySelectorAll(".slider_button_middle div")[i].style.boxSizing = "border-box"
    document.getElementById("slider").style.background = "url(" + k[i].src + ")";
}

// gif loader
document.onreadystatechange = function() {
    var state = document.readyState;
    if (state == 'interactive') {
        document.body.style.visibility = "hidden";
        document.getElementById('load').style.visibility = "visible";
    } else if (state == 'complete') {
        setTimeout(function() {
            document.getElementById('load').style.visibility = "hidden";
            document.body.style.visibility = "visible";
        }, 1000);
    }
}

// second slider
var l = document.querySelectorAll(".clean_code_text ul li");

function reset() {
    for (var i = 0; i < l.length; i++) {
        l[i].style.display = "";
    }
}
document.querySelector(".clean_code_tabs_item0").onclick = baxsi;
l[0].style.display = "block";

function baxsi() {
    reset();
    l[0].style.display = "block";
}
document.querySelector(".clean_code_tabs_item1").onclick = eli;

function eli() {
    reset();
    l[1].style.display = "block";
}
document.querySelector(".clean_code_tabs_item2").onclick = rehim;

function rehim() {
    reset();
    l[2].style.display = "block";
}
document.querySelector(".clean_code_tabs_item3").onclick = ferid;

function ferid() {
    reset();
    l[3].style.display = "block";
}
document.querySelector(".clean_code_tabs_item4").onclick = adil;

function adil() {
    reset();
    l[4].style.display = "block";
}
document.querySelector(".clean_code_tabs_item5").onclick = ehdim;

function ehdim() {
    reset();
    l[5].style.display = "block";
}
