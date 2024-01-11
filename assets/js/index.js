// navigation bar behavior, not fully optimized just yet, but a start
window.onscroll = function scrollFunction() {
    var scrollPosition = document.documentElement.scrollTop || window.scrollY;
    var arrow = document.getElementById('down-arrow');
    if (window.innerWidth >= 720) {
      if (scrollPosition > 800) {
        document.getElementById("navbar").style.top = "0";
      } else {
          document.getElementById("navbar").style.top = "-90px";
      }
    } else {
      navbar.style.top = "0";
    }
    
    if (scrollPosition >= 1) {
        arrow.classList.add('fade');
    } else {
        arrow.classList.remove('fade');
    }
}

// filter buttons
// credits to https://www.w3schools.com/howto/howto_js_filter_elements.asp

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("projects");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    console.log(element.className, arr2[i]);
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("buttons");
var btns = btnContainer.getElementsByClassName("filter-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    console.log(current);
  });
}

// credits to https://github.com/tameemsafi/typewriterjs
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(500)
    .deleteAll()
    .typeString('Kermit was originally here!')
    .deleteAll()
    .typeString('but because i don\'t want to get sued')
    .deleteAll()
    .typeString('Mickey is here instead!')
    .pauseFor(500)
    .deleteAll()
    .typeString('main color palette: #eddcd2')
    .pauseFor(300)
    .deleteChars(6)
    .typeString('cb997e')
    .pauseFor(300)
    .deleteChars(6)
    .pauseFor(300)
    .typeString('6a6a5d')
    .pauseFor(300)
    .deleteChars(6)
    .typeString('fbf5f2')
    .pauseFor(500)
    .deleteAll()
    .typeString('I learned Procreate for the project icons!')
    .pauseFor(500)
    .deleteAll()
    .typeString('More features to come soon!')
    .pauseFor(500)
    .deleteAll()
    .typeString('Thank you for visiting my website!')
    .pauseFor(500)
    .start();

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show-burger");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);