// 1. ARRAY: Storing a collection of vehicle objects
let inventory = [
    { id: 101, model: "Dodge Charger R/T", price: 42000, inStock: true, category: "Muscle" },
    { id: 102, model: "Ford Mustang GT", price: 45000, inStock: false, category: "Muscle" },
    { id: 103, model: "Toyota Camry TRD", price: 33000, inStock: true, category: "Sedan" },
    { id: 104, model: "Chevrolet Corvette Stingray", price: 68000, inStock: true, category: "Sports" }
];

// 2. OBJECT: Representing the dealership store entity
const dealership = {
    name: "San Antonio Auto Hub",
    city: "San Antonio",
    establishedYear: 2018,
    carsSoldThisMonth: 14,

    // OBJECT METHOD: Uses 'this' to calculate total monetary worth of inventory
    calculateInventoryValue: function() {
        let total = 0;
        // Using ARRAY METHOD inside Object Method
        inventory.forEach(function(car) {
            total += car.price;
        });
        return total;
    },

    // OBJECT METHOD: Formats dealership information string
    getStoreDetails: function() {
        return `${this.name} (${this.city}) - Est. ${this.establishedYear}. Total Inventory Value: $${this.calculateInventoryValue().toLocaleString()}`;
    }
};

// Render function displaying vehicles in the DOM using ARRAY METHOD (.forEach)
function renderVehicles(vehicleList) {
    const grid = document.getElementById("vehicle-grid");
    grid.innerHTML = ""; // Clear existing grid items

    // ARRAY METHOD 1: .forEach() iterates through the provided array
    vehicleList.forEach(function(car) {
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h3");
        title.textContent = car.model;

        const details = document.createElement("p");
        details.textContent = `Category: ${car.category} | Price: $${car.price.toLocaleString()}`;

        const statusBadge = document.createElement("span");
        statusBadge.className = "badge";
        statusBadge.textContent = car.inStock ? "Available" : "Sold";
        statusBadge.style.backgroundColor = car.inStock ? "#2ecc71" : "#e74c3c";

        card.appendChild(title);
        card.appendChild(details);
        card.appendChild(statusBadge);
        grid.appendChild(card);
    });
}

// Button Handler 1: Displays full array using .forEach
function displayAllVehicles() {
    renderVehicles(inventory);
}

// Button Handler 2: Uses ARRAY METHOD 2 (.filter) to return only available vehicles
function filterInStock() {
    const availableCars = inventory.filter(function(car) {
        return car.inStock === true;
    });
    renderVehicles(availableCars);
}

// Button Handler 3: Uses ARRAY METHOD 3 (.push) to add a new vehicle object to array
function addNewCar() {
    const newCar = {
        id: inventory.length + 101,
        model: "2025 Dodge Challenger SRT",
        price: 56000,
        inStock: true,
        category: "Muscle"
    };

    inventory.push(newCar); // Adds item to end of array
    displayAllVehicles();
}

// Button Handler 4: Calls Object Method and updates DOM
function showStoreSummary() {
    const infoPanel = document.getElementById("store-info");
    infoPanel.style.display = "block";
    infoPanel.textContent = dealership.getStoreDetails();
}

// Initial load rendering
displayAllVehicles();