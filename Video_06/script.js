let btn = document.getElementById("btnClick");
let notification = document.getElementById("notiUpper");
let crossMenu = document.getElementById("menuOff");
btn.addEventListener("click", () => {
  notification.style.top = 0;
  btn.innerHTML = "Subscribed";
});
crossMenu.addEventListener("click", () => {
  notification.style.top = "-12%";
  btn.innerHTML = "Subscribe";
});
