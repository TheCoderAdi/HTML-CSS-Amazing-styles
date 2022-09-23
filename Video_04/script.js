let bulb = document.getElementsByClassName("box")[0];
let shadow = document.getElementsByClassName("box2")[0];
setInterval(() => {
  bulb.classList.toggle("dim");
}, 1000);
setInterval(() => {
  shadow.classList.toggle("dim2");
}, 1000);
