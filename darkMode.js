$switch = document.getElementById(`toggle__switch`);

$switch.addEventListener(`click`, darkMode);

function darkMode() {
  if ($switch.checked) {
    document.body.classList.add(`darkMode`);
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove(`darkMode`);
    localStorage.setItem("darkMode", "disabled");
  }
}

if (localStorage.getItem("darkMode") === "enabled") {
  $switch.checked = true;
  darkMode();
} else {
  $switch.checked = false;
  darkMode();
}
