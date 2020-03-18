var inputBox = document.querySelector(".search-input")
var searchButton = document.querySelector(".search-img")
var projects = document.querySelectorAll(".project")

// Allows enter button to work for querys as well

inputBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchButton.click();
    }
});

function search() {
    // applies this sort method to all cards to get results
    for (i = 0; i < projects.length; i++) {
        // Makes all cards show again for another search
        projects[i].classList.remove("hidden")
        //If the card does not match the query -- hence (!), it hides the cards so the only cards showing are the ones that match the query. toLowerCase because case doesn't matter. innerText ignores tags.
        if (!projects[i].innerText.toLowerCase().includes(inputBox.value.toLowerCase())) {
            projects[i].classList.add("hidden")
        }
    }
}

