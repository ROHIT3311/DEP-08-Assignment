// --- Car Types Section ---
fetch("carTypes.json")
  .then((response) => response.json())
  .then((data) => {
    const carCardsContainer = document.getElementById("carCardsContainer");
    const carTypeViewAllButton = document.getElementById(
      "carTypeViewAllButton"
    );
    let carTypesShowingAll = false; // Track toggle state

    // Display the first 5 car types by default
    displayCarCards(data.slice(0, 5), carCardsContainer);

    // When the button is clicked, toggle view all / view less
    carTypeViewAllButton.addEventListener("click", () => {
      if (carTypesShowingAll) {
        // Show default 5 cards
        carCardsContainer.innerHTML = "";
        displayCarCards(data.slice(0, 5), carCardsContainer);
        carTypeViewAllButton.textContent = "View All";
      } else {
        // Show all cards
        carCardsContainer.innerHTML = "";
        displayCarCards(data, carCardsContainer);
        carTypeViewAllButton.textContent = "View Less";
      }
      carTypesShowingAll = !carTypesShowingAll;
    });
  })
  .catch((error) => console.error("Error fetching car types:", error));

// Function to display car cards (for car types)
function displayCarCards(cars, container) {
  container.innerHTML = "";
  let row;
  cars.forEach((car, index) => {
    if (index % 5 === 0) {
      row = document.createElement("div");
      row.className =
        "row d-flex justify-content-center justify-content-md-between mb-2";
      container.appendChild(row);
    }

    const col = document.createElement("div");
    col.className =
      "col-6 col-sm-4 col-md-2 d-flex justify-content-center mb-3";
    const card = document.createElement("div");
    card.className =
      "car-card border rounded d-flex flex-column align-items-center justify-content-center shadow";
    card.style.height = "100px";
    card.style.width = "130px";
    const img = document.createElement("img");
    img.src = car.image;
    img.alt = car.name;
    img.className = "img-fluid";
    img.style.maxHeight = "70%";
    img.style.width = "auto";
    const p = document.createElement("p");
    p.className = "mb-0 text-center";
    p.textContent = car.name;
    card.appendChild(img);
    card.appendChild(p);
    col.appendChild(card);
    row.appendChild(col);
  });
}

// --- Vehicles Section ---
fetch("vehicles.json")
  .then((response) => response.json())
  .then((data) => {
    const vehicleCardsContainer = document.getElementById(
      "vehicleCardsContainer"
    );
    const vehicleViewAllButton = document.getElementById(
      "vehicleViewAllButton"
    );
    let vehiclesShowingAll = false; // Track toggle state

    // Initially display first 8 vehicles
    displayVehicleCards(data.slice(0, 8), vehicleCardsContainer);

    // Toggle between showing all and default
    vehicleViewAllButton.addEventListener("click", () => {
      // Clear container once
      vehicleCardsContainer.innerHTML = "";
      if (vehiclesShowingAll) {
        displayVehicleCards(data.slice(0, 8), vehicleCardsContainer);
        vehicleViewAllButton.textContent = "View All";
      } else {
        displayVehicleCards(data, vehicleCardsContainer);
        vehicleViewAllButton.textContent = "View Less";
      }
      vehiclesShowingAll = !vehiclesShowingAll;
    });
  })
  .catch((error) => console.error("Error fetching vehicle data:", error));

/**
 * Function to display vehicle cards.
 * Each vehicle should have:
 *  - image, name, model, price, and an array of icons (e.g., fuel, mileage, engineType)
 */
function displayVehicleCards(vehicles, container) {
  // Clear container
  container.innerHTML = "";
  vehicles.forEach((vehicle) => {
    // Create responsive column:
    const col = document.createElement("div");
    col.className =
      "col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-3";

    // Create card element:
    const card = document.createElement("div");
    card.className = "car-card border rounded mb-4 shadow ";
    card.style.height = "410px";
    card.style.width = "270px";

    // Create image element:
    const img = document.createElement("img");
    img.src = vehicle.image;
    img.alt = vehicle.name;
    img.className = "img-fluid w-100";
    img.style.objectFit = "cover";
    img.style.borderRadius = "0.25rem";

    // Create details container:
    const detailDiv = document.createElement("div");
    detailDiv.className = "car-detail px-4 pt-2";

    // Vehicle Name:
    const nameP = document.createElement("p");
    nameP.textContent = vehicle.name;
    detailDiv.appendChild(nameP);

    // Model:
    const modelP = document.createElement("p");
    modelP.textContent = vehicle.model;
    detailDiv.appendChild(modelP);

    // Divider:
    detailDiv.appendChild(document.createElement("hr"));

    // Icons container:
    const iconsDiv = document.createElement("div");
    iconsDiv.className = "icons d-flex justify-content-between";

    // Instead of a fixed loop, we use an array to define which icons to show.
    // Ensure your vehicles.json has these properties: fuelIcon, fuel, mileageIcon, mileage, engineTypeIcon, engineType.
    const iconData = [
      { src: vehicle.fuelIcon, text: vehicle.fuel },
      { src: vehicle.mileageIcon, text: vehicle.mileage },
      { src: vehicle.engineTypeIcon, text: vehicle.engineType },
    ];

    iconData.forEach((item) => {
      const iconWrapper = document.createElement("div");
      iconWrapper.className = "text-center"; // Center icon and text

      const iconImg = document.createElement("img");
      iconImg.src = item.src;
      iconImg.alt = item.text;
      iconImg.className = "img-fluid";
      // Optionally adjust icon size:
      iconImg.style.width = "20px";

      const iconText = document.createElement("p");
      iconText.className = "mb-2 small";
      iconText.textContent = item.text;

      iconWrapper.appendChild(iconImg);
      iconWrapper.appendChild(iconText);
      iconsDiv.appendChild(iconWrapper);
    });

    detailDiv.appendChild(iconsDiv);

    // Divider:
    const hr = document.createElement("hr");
    hr.className = "mb-1";
    detailDiv.appendChild(hr);

    // Price:
    const priceH3 = document.createElement("h3");
    priceH3.textContent = vehicle.price;
    detailDiv.appendChild(priceH3);

    // Assemble card:
    card.appendChild(img);
    card.appendChild(detailDiv);
    col.appendChild(card);
    container.appendChild(col);
  });
}

// Fetch special cars data from JSON
fetch("vehicles.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("specialCarCardsContainer");
    const leftBtn = document.getElementById("specialLeftBtn");
    const rightBtn = document.getElementById("specialRightBtn");
    let currentIndex = 0;
    const cardsPerPage = 4;

    // Function to render 4 special car cards at a time
    function renderSpecialCars() {
      container.innerHTML = ""; // Clear previous cards
      const currentCars = data.slice(currentIndex, currentIndex + cardsPerPage);
      currentCars.forEach((vehicle) => {
        // Create responsive column:
        const col = document.createElement("div");
        // For mobile: col-12, small: col-6, medium and up: col-3 (4 per row)
        col.className =
          "col-12 col-sm-6 col-md-3 d-flex justify-content-center mb-3";

        // Create card element:
        const card = document.createElement("div");
        card.className = "car-card border rounded mb-4 shadow";
        card.style.height = "410px";
        card.style.width = "270px";

        // Create image element:
        const img = document.createElement("img");
        img.src = vehicle.image;
        img.alt = vehicle.name;
        img.className = "img-fluid w-100";
        img.style.objectFit = "cover";
        img.style.borderRadius = "0.25rem";

        // Create details container:
        const detailDiv = document.createElement("div");
        detailDiv.className = "car-detail px-4 pt-2";

        // Vehicle Name:
        const nameP = document.createElement("p");
        nameP.textContent = vehicle.name;
        detailDiv.appendChild(nameP);

        // Model:
        const modelP = document.createElement("p");
        modelP.textContent = vehicle.model;
        detailDiv.appendChild(modelP);

        // Divider:
        detailDiv.appendChild(document.createElement("hr"));

        // Icons container:
        const iconsDiv = document.createElement("div");
        iconsDiv.className = "icons d-flex justify-content-between";

        const iconData = [
          { src: vehicle.fuelIcon, text: vehicle.fuel },
          { src: vehicle.mileageIcon, text: vehicle.mileage },
          { src: vehicle.engineTypeIcon, text: vehicle.engineType },
        ];

        iconData.forEach((item) => {
          const iconWrapper = document.createElement("div");
          iconWrapper.className = "text-center";

          const iconImg = document.createElement("img");
          iconImg.src = item.src;
          iconImg.alt = item.text;
          iconImg.className = "img-fluid";
          iconImg.style.width = "20px"; // Adjust icon size if needed

          const iconText = document.createElement("p");
          iconText.className = "mb-2 small";
          iconText.textContent = item.text;

          iconWrapper.appendChild(iconImg);
          iconWrapper.appendChild(iconText);
          iconsDiv.appendChild(iconWrapper);
        });
        detailDiv.appendChild(iconsDiv);

        // Divider:
        const hr = document.createElement("hr");
        hr.className = "mb-1";
        detailDiv.appendChild(hr);

        // Price:
        const priceH3 = document.createElement("h3");
        priceH3.textContent = vehicle.price;
        detailDiv.appendChild(priceH3);

        // Assemble card:
        card.appendChild(img);
        card.appendChild(detailDiv);
        col.appendChild(card);
        container.appendChild(col);
      });
    }

    // Initial render
    renderSpecialCars();

    // Event listeners for arrow buttons
    rightBtn.addEventListener("click", () => {
      if (currentIndex + cardsPerPage < data.length) {
        currentIndex += cardsPerPage;
        renderSpecialCars();
      }
    });

    leftBtn.addEventListener("click", () => {
      if (currentIndex - cardsPerPage >= 0) {
        currentIndex -= cardsPerPage;
        renderSpecialCars();
      }
    });
  })
  .catch((error) => console.error("Error fetching special cars data:", error));

// --- Team Section ---
fetch("team.json")
  .then((response) => response.json())
  .then((data) => {
    const teamCardsContainer = document.getElementById("teamCardsContainer");
    const teamViewAllButton = document.getElementById("teamViewAllButton");

    if (!teamCardsContainer || !teamViewAllButton) {
      console.error("Error: Missing container or button element.");
      return;
    }

    let showingAllTeams = false; // Track toggle state

    // Initially display first 4 team members
    displayTeamCards(data.slice(0, 4), teamCardsContainer);

    // Toggle between showing all and default
    teamViewAllButton.addEventListener("click", () => {
      teamCardsContainer.innerHTML = ""; // Clear existing content
      if (showingAllTeams) {
        displayTeamCards(data.slice(0, 4), teamCardsContainer);
        teamViewAllButton.textContent = "View All";
      } else {
        displayTeamCards(data, teamCardsContainer);
        teamViewAllButton.textContent = "View Less";
      }
      showingAllTeams = !showingAllTeams;
    });
  })
  .catch((error) => console.error("Error fetching team data:", error));

/**
 * Function to display team cards.
 */
function displayTeamCards(teamMembers, container) {
  container.innerHTML = ""; // Clear container before adding new elements

  teamMembers.forEach((member) => {
    // Create column
    const col = document.createElement("div");
    col.className =
      "col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-3";

    // Create team card
    const card = document.createElement("div");
    card.className = "team-card border rounded shadow text-center";
    card.style.width = "250px";
    card.style.height = "330px";
    card.style.overflow = "hidden"; // Prevents overflow issues

    // Image container (70% of the card height)
    const imgContainer = document.createElement("div");
    imgContainer.style.height = "70%";
    imgContainer.style.display = "flex";
    imgContainer.style.alignItems = "center";
    imgContainer.style.justifyContent = "center";
    imgContainer.style.background = "#f8f9fa"; // Light background

    // Image
    const img = document.createElement("img");
    img.src = member.photo;
    img.alt = member.name;
    img.className = "img-fluid";
    img.style.height = "100%"; // Ensures it fills the container
    img.style.width = "auto";
    img.style.objectFit = "cover";

    imgContainer.appendChild(img);

    // Text container (30% of the card height)
    const textContainer = document.createElement("div");
    textContainer.style.height = "30%";
    textContainer.style.display = "flex";
    textContainer.style.flexDirection = "column";
    textContainer.style.justifyContent = "center";
    textContainer.style.padding = "10px";

    // Name
    const name = document.createElement("h5");
    name.className = "mb-1";
    name.textContent = member.name;

    // Role
    const role = document.createElement("p");
    role.className = "text-muted mb-0";
    role.textContent = member.role;

    // Assemble card
    textContainer.appendChild(name);
    textContainer.appendChild(role);
    card.appendChild(imgContainer);
    card.appendChild(textContainer);
    col.appendChild(card);
    container.appendChild(col);
  });
}
