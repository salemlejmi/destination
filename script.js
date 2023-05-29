(function () {
  "use script";

  let detailsForm = document.querySelector("#destination_details_form");

  detailsForm.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();

    let destName = event.target.elements["name"].value;

    let destLocation = event.target.elements["location"].value;

    let destPhoto = event.target.elements["photo"].value;

    let destDesc = event.target.elements["description"].value;

    for (let i = 0; i < detailsForm.length; i++) {
      detailsForm.elements[i].value = "";
    }

    let destCard = createDestinationCard(
      destName,
      destLocation,
      destPhoto,
      destDesc
    );

    let wishListContainer = document.getElementById("destinations_container");

    if (wishListContainer.children.length === 0) {
      document.getElementById("title").innerHTML = "My Wish List";
    }
    document.querySelector("#destinations_container").appendChild(destCard);
  }

  function createDestinationCard(name, location, photoUrl, description) {
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.setAttribute("alt", name);

    let constantPhotoUrl = "images/signpost.jpg";

    if (photoUrl.length === 0) {
      img.setAttribute("src", constantPhotoUrl);
    } else {
      img.setAttribute("src", photoUrl);
    }

    card.appendChild(img);

    let cardBody = document.createElement("div");

    cardBody.className = "card-body";

    let cardTitle = document.createElement("h3");

    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    let cardSubtitle = document.createElement("h4");

    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if (description.length !== 0) {
      let cardText = document.createElement("p");

      cardText.className = "card-text";
      cardText.innerText = description;
      cardBody.appendChild(cardText);
    }

    let cardDeleteBtn = document.createElement("button");

    cardDeleteBtn.innerText = "remove";
    cardDeleteBtn.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);

    return card;
  }

  function removeDestination(event) {
    let card = event.target.parentElement.parentElement;
    card.remove();
  }
})();
