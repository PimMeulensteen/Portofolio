function click_event_handeler(el) {
  elements_with_information = ['b', 'd', 'f', 'j', 'g', 'f']
  id = el.target.id;
  console.log(id);
  if (elements_with_information.indexOf(id) >= 0) {
    console.log('INFO')
    up(id)
  }

}

//Add event listener to sections
sections = document.getElementsByTagName('SECTION');
sections_elements = sections.length
for (i = 0; i < sections_elements; i++) {
  sections[i].addEventListener("click", click_event_handeler);
}

//add keypresslistener
window.addEventListener("keydown", function(event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  if (event.key == "Escape") {
    down();
  }
})



container_div = document.getElementById("container");
information_div = document.getElementById("information");

function down() {
  container_div.style.bottom = '0%';
  information_div.style.top = '100%';
  document.documentElement.style.backgroundColor = "rgb(13, 61, 81)";
}

function up(colour) {

  c = window.getComputedStyle(document.getElementById(colour), null).getPropertyValue("background-color");

  document.documentElement.style.backgroundColor = c;
  container_div.style.bottom = '100%';
  information_div.style.top = '0%';
}

//Check if touch is avalivle:
screen_h = screen.height /4;
function hasTouch() {
    return (('ontouchstart' in window) ||       // html5 browsers
            (navigator.maxTouchPoints > 0) ||   // future IE
            (navigator.msMaxTouchPoints > 0));  // current IE10
}

if (hasTouch()) { //If it is, make swipe guesture.
  console.log('Touch detected!')
  document.addEventListener("touchstart", function(event){
    touching = true;
    down_y = event.touches[0].clientY;
    console.log(down_y);console.log('down_y');
  });
  document.addEventListener("touchmove", function(event){
    if(touching) {
      console.log(event.touches[0].clientY);
      if (down_y < event.touches[0].clientY - screen_h){
        console.log(touching);
        down()
      }

    }
  });
  document.addEventListener("touchend", function(event){
    touching = false;
  });
}
