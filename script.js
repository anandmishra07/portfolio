let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showdata");

  if (ul.classList.contains("showdata")) {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

var phrases = ["Anand Mishra", "Web developer"];
var index = 0;
var speed = 100,
  delay = 2000;

function typeWriter(text, i) {
  if (i < text.length) {
    document.getElementById("typing-carousel").innerHTML =
      text.substring(0, i + 1) + '<span class="cursor"></span>';
    setTimeout(() => typeWriter(text, i + 1), speed);
  } else {
    setTimeout(() => {
      index = (index + 1) % phrases.length; // Increment index and loop back to 0 if it exceeds phrases.length
      typeWriter(phrases[index], 0);
    }, delay);
  }
}

typeWriter(phrases[index], 0);

function Button_click() {
  var Element = document.body;
  Element.classList.toggle("mode-change");
}
