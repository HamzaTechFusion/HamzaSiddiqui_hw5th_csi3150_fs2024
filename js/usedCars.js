const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
  },
  // Additional entries:
  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
  // Five more entries:
  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
  },
  {
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
  },
];

document.addEventListener("DOMContentLoaded", () => 
{
  const vehicleList = document.getElementById("vehicle-list");
  const noResultsMessage = document.createElement("p");
  noResultsMessage.textContent = "No cars match your criteria. Please try again.";
  noResultsMessage.style.display = "none";
  vehicleList.appendChild(noResultsMessage);

  document.getElementById("filter-button").addEventListener("click", () => 
    {
      const minYear = document.getElementById("minYear").value;
      const maxYear = document.getElementById("maxYear").value;
      const selectedMakes = Array.from(document.getElementById("make").selectedOptions).map(option => option.value);
      const maxMileage = document.getElementById("maxMileage").value;
      const minPrice = document.getElementById("minPrice").value;
      const maxPrice = document.getElementById("maxPrice").value;
      const selectedColors = Array.from(document.getElementById("color").selectedOptions).map(option => option.value);
      const vehicleCards = document.querySelectorAll(".vehicle-card");

      let hasMatches = false;

      vehicleCards.forEach(card => 
      {
        card.style.display = "block";
      });

      vehicleCards.forEach(card => 
      {
        const year = parseInt(card.getAttribute("data-year"));
        const make = card.getAttribute("data-make");
        const mileage = parseInt(card.getAttribute("data-mileage"));
        const price = parseInt(card.getAttribute("data-price"));
        const color = card.getAttribute("data-color");

        const yearMatch = (!minYear || year >= minYear) && (!maxYear || year <= maxYear);
        const makeMatch = selectedMakes.length === 0 || selectedMakes.includes(make);
        const mileageMatch = !maxMileage || mileage <= maxMileage;
        const priceMatch = (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice);
        const colorMatch = selectedColors.length === 0 || selectedColors.includes(color);

        if (yearMatch && makeMatch && mileageMatch && priceMatch && colorMatch) 
        {
          card.style.display = "block";
          hasMatches = true;
        } else 
        {
        card.style.display = "none";
        }
      });

      if (!hasMatches) 
      {
        noResultsMessage.style.display = "block";
      } 
      else 
      {
        noResultsMessage.style.display = "none";
      }
    }
  );
});
