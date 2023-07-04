const $back = document.getElementById(`back`);
const $accesoriesButton = document.getElementsByClassName(`accesoriesButton`);
const $chosedCarDetails = document.getElementById(`chosedCarDetails`);
const $date = document.getElementById(`date`);
const $formDetails = document.getElementById(`buyerDetails`);
const $payForm = document.getElementsByName(`payForm`);

//accesories button functionality
for (let i = 0; i < $accesoriesButton.length; i++) {
  $accesoriesButton[i].addEventListener(`click`, accesories);
}

//actual date +14 days
let date = new Date();
date.setDate(date.getDate() + 14);
const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(-2);
const day = ("0" + date.getDate()).slice(-2);

$date.value = `${year}-${month}-${day}`;

//get informations about chosed car
let carSpec = JSON.parse(window.localStorage.getItem(`carSpec`));
$back.addEventListener(`click`, () => {
  window.location.href = `main.html`;
});

let totalAmount = parseInt(window.localStorage.getItem(`price`));
window.localStorage.setItem(`price`, totalAmount);
priceUpdate();

function priceUpdate() {
  $chosedCarDetails.innerHTML = `<p><h2>Car model: ${carSpec.Brand} 
    ${carSpec.Model}</p> <p>Price: ${totalAmount} USD</p></h2> <p><button 
    type="submit" id="buyNow" form="buyerDetails">Buy now!</button></p>`;
}

function accesories() {
  let isHidden = [];
  for (let i = 0; i < $accesoriesButton.length; i++) {
    if ($accesoriesButton[i].classList[1] == this.classList[1]) {
      $accesoriesButton[i].classList.toggle("visibilityHidden");
    }
    if ($accesoriesButton[i].classList.contains(`visibilityHidden`)) {
      isHidden[i] = true;
    } else {
      isHidden[i] = false;
    }
    localStorage.setItem("accesoriesMemory", JSON.stringify(isHidden));
  }
  totalAmount += parseInt(this.dataset.price);
  priceUpdate();
  window.localStorage.setItem(`price`, totalAmount);
}

let radioValue = 0;
//save form details
$formDetails.addEventListener("change", () => {
  for (let i = 0; i < $payForm.length; i++) {
    if ($payForm[i].checked) {
      radioValue = $payForm[i].value;
    }
  }
  const formDetails = {
    radio: radioValue,
    name: $formDetails[3].value,
    lastName: $formDetails[4].value,
    date: $formDetails[5].value,
  };
  window.localStorage.setItem("formDetails", JSON.stringify(formDetails));
});

//set form details on refresh
function setFormDetails() {
  let formDetails = JSON.parse(window.localStorage.getItem(`formDetails`));
  for (let i = 0; i < $payForm.length; i++) {
    if ($payForm[i].value === formDetails.radio) {
      $payForm[i].checked = true;
    }
  }

  $formDetails[3].value = formDetails.name;
  $formDetails[4].value = formDetails.lastName;
  $formDetails[5].value = formDetails.date;
}

if (localStorage.getItem(`formDetails`) !== null) {
  setFormDetails();
}

if (localStorage.getItem(`accesoriesMemory`)) {
  let isHidden = JSON.parse(window.localStorage.getItem(`accesoriesMemory`));
  for (let i = 0; i < $accesoriesButton.length; i++) {
    if (isHidden[i] === true) {
      $accesoriesButton[i].classList.add(`visibilityHidden`);
    } else {
      $accesoriesButton[i].classList.remove(`visibilityHidden`);
    }
  }
}
