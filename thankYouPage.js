$button = document.getElementById(`back`).addEventListener(`click`, () => {
    window.location.href = `main.html`
})
$content = document.getElementById(`content`)



if (localStorage.getItem(`formDetails`) === null) {
    window.location.href = `main.html`
   
} else {
    let carSpec = JSON.parse(window.localStorage.getItem(`carSpec`))
    let price = window.localStorage.getItem(`price`)
    let formDetails = JSON.parse(window.localStorage.getItem(`formDetails`))
    $content.innerHTML = `<b><p>Congratulations ${formDetails.name}, you just bought ${carSpec.Brand} ${carSpec.Model} for ${price}. Choosed payment method: ${formDetails.radio}</p><img src="${carSpec.Img}"><p>The car will be delivered on ${formDetails.date} </p></b>`
    window.localStorage.removeItem(`formDetails`)
}