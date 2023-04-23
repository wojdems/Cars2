const $carBrands = document.querySelector(`input`)
const $allCars = document.getElementById(`allCars`)
const $carBrandOption = document.getElementById(`carBrandOption`)

// Array of object of car specyfications
const cars = [{
        Brand: `Audi`,
        Model: `RS6`,
        Info: {
            Year: 2022,
            Color: `black`,
            Power: `441 kW`,
            Mileage: `150000 km`,
            Price: `450,000 USD`,
        },
        Img: "cars/audi-rs6.jpg"
    },
    {
        Brand: `Mercedes`,
        Model: `GLZ`,
        Info: {
            Year: 2021,
            Color: `black`,
            Power: `230 kW`,
            Mileage: `50000 km`,
            Price: `230,000 USD`,
        },
        Img: "cars/Mercedes-Benz-GLS.jpg"
    },
    {
        Brand: `BMW`,
        Model: `M3`,
        Info: {
            Year: 2020,
            Color: `green`,
            Power: `309 kW`,
            Mileage: `30000 km`,
            Price: `70,000 USD`,
        },
        Img: "cars/BMW_M3.jpg"
    }, 
      {
        Brand: "Audi",
        Model: "A3",
        Info: {
          Year: 2021,
          Color: "White",
          Power: "150 HP",
          Mileage: "10,000 km",
          Price: "35,000 USD"
        },
        Img: "cars/audi-a3.jpeg"
      },
      {
        Brand: "BMW",
        Model: "X5",
        Info: {
          Year: 2020,
          Color: "Black",
          Power: "265 HP",
          Mileage: "25,000 km",
          Price: "50,000 USD"
        },
        Img: ""
      },
      {
        Brand: "Chevrolet",
        Model: "Camaro",
        Info: {
          Year: 2018,
          Color: "Red",
          Power: "455 HP",
          Mileage: "15,000 km",
          Price: "35,000 USD"
        },
        Img: ""
      },
      {
        Brand: "Dodge",
        Model: "Challenger",
        Info: {
          Year: 2022,
          Color: "Yellow",
          Power: "485 HP",
          Mileage: "5,000 km",
          Price: "55,000 USD"
        },
        Img: ""
      },
      {
        Brand: "Ferrari",
        Model: "488 GTB",
        Info: {
          Year: 2020,
          Color: "Red",
          Power: "661 HP",
          Mileage: "2,000 km",
          Price: "275,000 USD"
        },
        Img: ""
      },
      {
        Brand: "Ford",
        Model: "Mustang",
        Info: {
          Year: 2019,
          Color: "Blue",
          Power: "460 HP",
          Mileage: "20,000 km",
          Price: "45,000 USD"
        },
        Img: "cars/ford-mustang.jpg" 
      },
      {
        Brand: "Honda",
        Model: "Civic",
        Info: {
          Year: 2021,
          Color: "Gray",
          Power: "174 HP",
          Mileage: "12,000 km",
          Price: "22,000 USD"
        },
        Img: ""
      },
      {
        Brand: "Hyundai",
        Model: "Sonata",
        Info: {
          Year: 2022,
          Color: "Silver",
          Power: "180 HP",
          Mileage: "8,000 km",
          Price: "25,000 USD"
        },
        Img: ""
      },
      {
        Brand: "Jaguar",
        Model: "F-Type",
        Info: {
          Year: 2019,
          Color: "Green",
          Power: "296 HP",
          Mileage: "18,000 km",
          Price: "60,000 USD"
        },
        Img: ""
      },
      {
        Brand: "Jeep",
        Model: "Grand Cherokee",
        Info: {
          Year: 2020,
          Color: "Black",
          Power: "293 HP",
          Mileage: "14,000 km",
          Price: "42,000 USD"
        },
        Img: ""
      },
      {
        Brand: "Kia",
        Model: "Sorento",
        Info: {
          Year: 2022,
          Color: "White",
          Power: "191 HP",
          Mileage: "5,000 km",
          Price: "30,000 USD"
        },
        Img: ""
      }, 
]

let filteredCars = [];


cars.forEach(car => {
 $carBrandOption.innerHTML += `<p> <option value="${car.Brand}"></option></p>`
})


function carArray() {
    $allCars.innerHTML = '';
    filteredCars = [];
    if ($carBrands.value == "") {
        filteredCars = [...cars];
    } else {
        cars.forEach(auto => {
            if (auto.Brand.includes($carBrands.value)) {
                filteredCars.push(auto)
            }
        })
    }


    filteredCars.forEach(auto => {
        const newCarContainer = document.createElement("div");
        newCarContainer.classList.add("carBox");

        const newCarImg = document.createElement("img");
        newCarImg.src = auto.Img;

        const newCarInfoContainer = document.createElement("div");
        newCarInfoContainer.classList.add("carInformation");

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

    const $carBox = document.getElementsByClassName(`carBox`)
//click to choose function
for (let i = 0; i < $carBox.length; i++) {
    
    $carBox[i].addEventListener(`click`, () => {
        window.localStorage.setItem('carSpec', JSON.stringify(filteredCars[i]));
        window.location.href = `form.html`
    })
}
    
   
}

$carBrands.addEventListener("change", () => {
    carArray();
})

carArray();

