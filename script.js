let $car_spec = document.getElementsByClassName(`car_spec`)
let $car_brands = document.querySelector(`input`)
let $car_information = document.getElementsByClassName(`car_information`)
let $allCars = document.getElementById(`cars`)

// Array of object of car specyfications
let auta = [{
        Brand: `Audi`,
        Model: `RS6`,
        Info: {
            Year: `2022`,
            Color: `black`,
            Power: `441 kW`,
            Mileage: `150000 km`,
            Price: 450000,
        },
        Img: "audi-rs6.jpg"
    },
    {
        Brand: `Mercedes`,
        Model: `GLZ`,
        Info: {
            Year: `2021`,
            Color: `black`,
            Power: `230 kW`,
            Mileage: `50000 km`,
            Price: 230000,
        },
        Img: "Mercedes-Benz-GLS.jpg"
    },
    {
        Brand: `BMW`,
        Model: `M3`,
        Info: {
            Year: `2020`,
            Color: `green`,
            Power: `309 kW`,
            Mileage: `30000 km`,
            Price: 70000,
        },
        Img: "BMW_M3.jpg"
    }
]
let filteredCars = [];

function carArray() {
    $allCars.innerHTML = '';
    filteredCars = [];
    if ($car_brands.value == "") {
        filteredCars = [...auta];
    } else {
        auta.forEach(auto => {
            if (auto.Brand.includes($car_brands.value)) {
                filteredCars.push(auto)
            }
        })
    }


    filteredCars.forEach(auto => {
        const newCarContainer = document.createElement("div");
        newCarContainer.classList.add("car_box");

        const newCarImg = document.createElement("img");
        newCarImg.src = auto.Img;

        const newCarInfoContainer = document.createElement("div");
        newCarInfoContainer.classList.add("car_information");

        const newCarName = document.createElement("h1");
        newCarName.classList.add("h1hover")
        newCarName.innerHTML = `${auto.Brand} ${auto.Model}`
        newCarInfoContainer.appendChild(newCarName)

        for (const [key, value] of Object.entries(auto.Info)) {
            const newCarInfo = document.createElement("p");
            newCarInfo.innerHTML = `${key}: ${value}`
            if (key == "Price") {
                newCarInfo.classList.add("price")
            }
            newCarInfoContainer.appendChild(newCarInfo)
        }

        newCarContainer.appendChild(newCarImg)
        newCarContainer.appendChild(newCarInfoContainer)
        $allCars.appendChild(newCarContainer);
    })


}

carArray();

$car_brands.addEventListener("change", () => {
    carArray();
})

let $car_box = document.querySelectorAll(`.car_box`)
//click to choose function
for (let i = 0; i < $car_box.length; i++) {
    $car_box[i].addEventListener(`click`, () => {
        window.localStorage.setItem('carSpec', JSON.stringify(auta[i]));
        window.location.href = `form.html`
    })
}