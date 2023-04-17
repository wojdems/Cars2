let $back = document.getElementById(`back`)
let $accesoriesButton = document.getElementsByClassName(`accesoriesButton`)
let $chosedCarDetails = document.getElementById(`chosedCarDetails`)
let $date = document.getElementById(`date`)
let $formDetails = document.getElementById(`buyer_details`)
let $pay_form = document.getElementsByName(`pay_form`)



//accesories button functionality
for (let i = 0; i < $accesoriesButton.length; i++) {
    $accesoriesButton[i].addEventListener(`click`, accesories)
}

//actual date +14 days 
let date = new Date();
date.setDate(date.getDate() + 14)
let year = date.getFullYear()
let month = ("0" + (date.getMonth() + 1)).slice(-2)
let day = ("0" + date.getDate()).slice(-2)

$date.value = `${year}-${month}-${day}`

//get informations about chosed car
carSpec = JSON.parse(window.localStorage.getItem(`carSpec`))
$back.addEventListener(`click`, () => {
    window.location.href = `main.html`
})

//set actual price
let totalAmount = carSpec.Info.Price
priceUpdate()

function priceUpdate() {
    $chosedCarDetails.innerHTML = `<p><h2>Car model: ${carSpec.Brand} ${carSpec.Model}</p> <p>Price: ${totalAmount}</p></h2> <p><button type="submit" id="buyNow" form="buyer_details">Buy now!</button></p>`
    window.localStorage.setItem(`price`, totalAmount)
}

function accesories() {
    if (this === $accesoriesButton[0]) {
        totalAmount += 4500
        this.classList.add(`visibility`)
        $accesoriesButton[1].classList.remove(`visibility`)
    } else if (this === $accesoriesButton[2]) {
        totalAmount += 15000
        this.classList.add(`visibility`)
        $accesoriesButton[3].classList.remove(`visibility`)
    } else if (this === $accesoriesButton[1]) {
        totalAmount -= 4500
        this.classList.add(`visibility`)
        $accesoriesButton[0].classList.remove(`visibility`)
    } else if (this === $accesoriesButton[3]) {
        totalAmount -= 15000
        this.classList.add(`visibility`)
        $accesoriesButton[2].classList.remove(`visibility`)
    }
    priceUpdate()
}


//save form details
$formDetails.addEventListener("change", () => {
    for (i = 0; i < $pay_form.length; i++) {
        if ($pay_form[i].checked) {
            var radioValue = $pay_form[i].value
        }
    }
    let formDetails = {
        radio: radioValue,
        name: $formDetails[3].value,
        lastName: $formDetails[4].value,
        date: $formDetails[5].value
    }
    console.log(formDetails)
    window.localStorage.setItem('formDetails', JSON.stringify(formDetails));
})

//set form details on refresh
function setFormDetails() {
    let formDetails = JSON.parse(window.localStorage.getItem(`formDetails`))
    for (i = 0; i < $pay_form.length; i++) {
        if ($pay_form[i].value === formDetails.radio) {
            $pay_form[i].checked = true
        }
    }

    $formDetails[3].value = formDetails.name
    $formDetails[4].value = formDetails.lastName
    $formDetails[5].value = formDetails.date
}

if (localStorage.getItem(`formDetails`) !== null) {
    setFormDetails()
}