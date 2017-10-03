//Handeler for clicks on setions
function click_event_handeler() {
    var elements_with_information = ["b", "d", "f", "j", "g", "f"];
    var id = this.id;
    if (elements_with_information.indexOf(id) >= 0) {
        up(id);
    } else {
        switch (id) {
            case "a":
                window.location.href = "https://github.com/PimMeulensteen";
                break
            case "c":
                window.location.href = "https://stackoverflow.com/users/7267641/";
                break
            case "e":
                break
            case "h":
                break
            case "i":
                break
        }

    }
}

//Add event listener to sections
var sections = document.getElementsByTagName("SECTION");
var sections_elements = sections.length;
for (var i = 0; i < sections_elements; i++) {
    sections[i].addEventListener("click", click_event_handeler);
}

//add keypresslistener
window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    if (event.key === "Escape") {
        down();
    }
})



var container_div = document.getElementById("container");
var information_div = document.getElementById("information");

function down() {
    container_div.style.bottom = "0%";
    information_div.style.top = "100%";
    document.documentElement.style.backgroundColor = "rgb(13, 61, 81)";
}

function up(id) {
    var c = window.getComputedStyle(document.getElementById(id), null).getPropertyValue("background-color");
    set_information(id);
    document.documentElement.style.backgroundColor = c;
    container_div.style.bottom = "150%";
    information_div.style.top = "0%";
}

function set_information(id) {
    var info = {
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "e": "",
        "f": "",
        "g": "<span id='g'>\
                <h1>Contact</h1>\
                    <p>\
                        <b>Email (privé):</b> pim@meulensteen.net <br>\
                        <b>Email (school):</b> 18038@edu.msa.nl<br>\
                        <b>Email (school 2):</b> pimmeulensteen@ictindewolken.nl<br>\
                    </p>\
              </span>",
        "h": "",
        "i": "",
        "j": ""

    };
    information_div.innerHTML = info[id];

}

//If landschape -> make 3x4:
function update_layout() {
    "use strict";
    var d = document.getElementById("d");
    var c = document.getElementById("c");
    var e = document.getElementById("e");
    if (window.outerHeight / window.outerWidth > 1.11) {
        container_div.appendChild(d);
    } else {
        c.parentNode.insertBefore(d, c.nextSibling);
    }
    return true;
}
update_layout()
window.onresize = function() {
    update_layout()
};







//Check if touch is avalivle:
screen_h = screen.height / 4;

function hasTouch() {
    return (("ontouchstart" in window) || // html5 browsers
        (navigator.maxTouchPoints > 0) || // future IE
        (navigator.msMaxTouchPoints > 0)); // current IE10
}

if (hasTouch()) { //If it is, make swipe guesture.
    console.log("Touch detected!")
    document.addEventListener("touchstart", function(event) {
        touching = true;
        down_y = event.touches[0].clientY;
    });
    document.addEventListener("touchmove", function(event) {
        if (touching) {
            if (down_y < event.touches[0].clientY - screen_h) {
                down()
            }

        }
    });
    document.addEventListener("touchend", function(event) {
        touching = false;
    });
}
