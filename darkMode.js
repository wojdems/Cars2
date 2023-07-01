$switch = document.getElementById(`toggle__switch`);

$switch.addEventListener(`click`, darkMode);

function darkMode() {
  if ($switch.checked) {
    console.log(`checked`);
    document.body.classList.add(`darkMode`);
    localStorage.setItem(darkMode, "enabled");
  } else {
    console.log(`not checked`);
    document.body.classList.remove(`darkMode`);
    localStorage.setItem(darkMode, "disabled");
  }
}

if (localStorage.getItem(darkMode) === "enabled") {
  $switch.checked = true;
  darkMode();
} else {
  $switch.checked = false;
  darkMode();
}
