// function toggleMenu() {
//   document.getElementById("mobile-menu").classList.toggle("hidden");
// }

function toggleMenu() {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const boxcarHeading = document.getElementById("boxcar-heading");
  const toggleButton = document.getElementById("toggle-button");

  // Toggle the visibility of the hamburger menu
  hamburgerMenu.classList.toggle("hidden");

  // Hide or show the header content
  if (hamburgerMenu.classList.contains("hidden")) {
    boxcarHeading.classList.remove("hidden");
    toggleButton.classList.remove("hidden");
  } else {
    boxcarHeading.classList.add("hidden");
    toggleButton.classList.add("hidden");
  }
}

fetch("carTypes.json")
  .then((response) => response.json())
  .then((data) => {
    const carCardsContainer = document.getElementById("carCardsContainer");
    const carTypeViewAllButton = document.getElementById(
      "carTypeViewAllButton"
    );
    let carTypesShowingAll = false;

    displayCarCards(data.slice(0, 5), carCardsContainer);

    carTypeViewAllButton.addEventListener("click", () => {
      carCardsContainer.innerHTML = "";
      if (carTypesShowingAll) {
        displayCarCards(data.slice(0, 5), carCardsContainer);
        carTypeViewAllButton.textContent = "View All";
      } else {
        displayCarCards(data, carCardsContainer);
        carTypeViewAllButton.textContent = "View Less";
      }
      carTypesShowingAll = !carTypesShowingAll;
    });
  })
  .catch((error) => console.error("Error fetching car types:", error));

function displayCarCards(cars, container) {
  container.innerHTML = "";
  cars.forEach((car) => {
    const card = document.createElement("div");
    card.className =
      "flex flex-col items-center justify-center border rounded-lg shadow-lg p-4 bg-white flex-shrink-0";
    card.style.height = "120px";
    card.style.width = "140px";

    const img = document.createElement("img");
    img.src = car.image;
    img.alt = car.name;
    img.className = "h-[30px] w-[40px]";

    const p = document.createElement("p");
    p.className = "text-center text-sm mt-2";
    p.textContent = car.name;

    card.appendChild(img);
    card.appendChild(p);
    container.appendChild(card);
  });
}
fetch("vehicles.json")
  .then((response) => response.json())
  .then((data) => {
    const vehicleCardsContainer = document.getElementById(
      "vehicleCardsContainer"
    );
    const vehicleViewAllButton = document.getElementById(
      "vehicleViewAllButton"
    );
    let vehiclesShowingAll = false;

    displayVehicleCards(data.slice(0, 8), vehicleCardsContainer);

    vehicleViewAllButton.addEventListener("click", () => {
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

function displayVehicleCards(vehicles, container) {
  container.innerHTML = "";
  vehicles.forEach((vehicle) => {
    const card = document.createElement("div");
    card.className =
      "border rounded-lg shadow-lg overflow-hidden bg-white flex flex-col";
    card.style.width = "100%";

    const img = document.createElement("img");
    img.src = vehicle.image;
    img.alt = vehicle.name;
    img.className = "w-full h-auto object-cover"; // Image will fill the card width and maintain aspect ratio

    const detailDiv = document.createElement("div");
    detailDiv.className = "text-left mt-3 w-full p-4"; // Added padding for spacing

    const nameP = document.createElement("p");
    nameP.className = "font-semibold text-lg";
    nameP.textContent = vehicle.name;
    detailDiv.appendChild(nameP);

    const modelP = document.createElement("p");
    modelP.className = "text-gray-500";
    modelP.textContent = vehicle.model;
    detailDiv.appendChild(modelP);

    const hr = document.createElement("hr");
    hr.className = "my-2 border-gray-300";
    detailDiv.appendChild(hr);

    const iconsDiv = document.createElement("div");
    iconsDiv.className = "flex justify-between w-full text-center";

    const iconData = [
      { src: vehicle.fuelIcon, text: vehicle.fuel },
      { src: vehicle.mileageIcon, text: vehicle.mileage },
      { src: vehicle.engineTypeIcon, text: vehicle.engineType },
    ];

    iconData.forEach((item) => {
      const iconWrapper = document.createElement("div");
      iconWrapper.className = "flex flex-col items-center";

      const iconImg = document.createElement("img");
      iconImg.src = item.src;
      iconImg.alt = item.text;
      iconImg.className = "w-6 h-6";

      const iconText = document.createElement("p");
      iconText.className = "text-sm text-gray-600";
      iconText.textContent = item.text;

      iconWrapper.appendChild(iconImg);
      iconWrapper.appendChild(iconText);
      iconsDiv.appendChild(iconWrapper);
    });

    detailDiv.appendChild(iconsDiv);
    detailDiv.appendChild(document.createElement("hr"));

    const priceH3 = document.createElement("h3");
    priceH3.className = "text-lg font-bold text-blue-600 mt-2";
    priceH3.textContent = vehicle.price;
    detailDiv.appendChild(priceH3);

    card.appendChild(img);
    card.appendChild(detailDiv);
    container.appendChild(card);
  });
}

// Special Vehicles
fetch("vehicles.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("specialCarCardsContainer");
    const leftBtn = document.getElementById("specialLeftBtn");
    const rightBtn = document.getElementById("specialRightBtn");
    let currentIndex = 0;
    const cardsPerPage = 4;

    function renderSpecialCars() {
      container.innerHTML = "";
      const currentCars = data.slice(currentIndex, currentIndex + cardsPerPage);
      currentCars.forEach((vehicle) => {
        const card = document.createElement("div");
        card.className =
          "car-card border rounded-lg shadow-lg overflow-hidden bg-white"; // Keep overflow-hidden for rounded corners

        const img = document.createElement("img");
        img.src = vehicle.image;
        img.alt = vehicle.name;
        img.className = "w-full h-auto object-cover -mt-4"; // Negative margin to overlap the rounded corners

        const detailDiv = document.createElement("div");
        detailDiv.className = "flex flex-col p-4 mt-2"; // Add padding to detail section

        const nameP = document.createElement("p");
        nameP.textContent = vehicle.name;
        nameP.className = "font-semibold text-left"; // Align text to the left
        detailDiv.appendChild(nameP);

        const modelP = document.createElement("p");
        modelP.textContent = vehicle.model;
        modelP.className = "text-gray-600 text-sm text-left"; // Align text to the left
        detailDiv.appendChild(modelP);

        const iconsDiv = document.createElement("div");
        iconsDiv.className = "flex justify-between mt-2"; // Flex row for icons with space between

        const iconData = [
          { src: vehicle.fuelIcon, text: vehicle.fuel },
          { src: vehicle.mileageIcon, text: vehicle.mileage },
          { src: vehicle.engineTypeIcon, text: vehicle.engineType },
        ];

        iconData.forEach((item) => {
          const iconWrapper = document.createElement("div");
          iconWrapper.className = "flex flex-col items-center";

          const iconImg = document.createElement("img");
          iconImg.src = item.src;
          iconImg.alt = item.text;
          iconImg.className = "w-5 h-5";

          const iconText = document.createElement("p");
          iconText.className = "text-xs text-gray-500";
          iconText.textContent = item.text;

          iconWrapper.appendChild(iconImg);
          iconWrapper.appendChild(iconText);
          iconsDiv.appendChild(iconWrapper);
        });

        detailDiv.appendChild(iconsDiv);

        const priceH3 = document.createElement("h3");
        priceH3.textContent = vehicle.price;
        priceH3.className = "text-lg font-bold mt-2 text-left"; // Align text to the left
        detailDiv.appendChild(priceH3);

        card.appendChild(img);
        card.appendChild(detailDiv);
        container.appendChild(card);
      });
    }

    renderSpecialCars();

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
    // Create team card container using Tailwind grid (each card fills its grid cell)
    const card = document.createElement("div");
    card.className =
      "team-card border rounded shadow text-center overflow-hidden w-64 h-80 mx-auto";

    // Image container (70% of the card height)
    const imgContainer = document.createElement("div");
    imgContainer.className = "flex items-center justify-center bg-gray-100";
    imgContainer.style.height = "70%";

    // Image
    const img = document.createElement("img");
    img.src = member.photo;
    img.alt = member.name;
    img.className = "object-cover h-full w-auto";
    imgContainer.appendChild(img);

    // Text container (30% of the card height)
    const textContainer = document.createElement("div");
    textContainer.className = "flex flex-col justify-center p-2";
    textContainer.style.height = "30%";

    // Name
    const name = document.createElement("h5");
    name.className = "text-lg font-semibold mb-1";
    name.textContent = member.name;

    // Role
    const role = document.createElement("p");
    role.className = "text-sm text-gray-500";
    role.textContent = member.role;

    // Assemble card
    textContainer.appendChild(name);
    textContainer.appendChild(role);
    card.appendChild(imgContainer);
    card.appendChild(textContainer);
    container.appendChild(card);
  });
}
