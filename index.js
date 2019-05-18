

function getImage(breedURL) {
    fetch(breedURL).then( response => { 
    if(!response.ok){
        alert('breed not found')
    } else {
        fetch(breedURL)
        .then(response => response.json())
        .then(responseJson => displayDogs(responseJson))
    }});
}

function handleButtonSubmit() {
    $('.formContainer').on('submit', 'form', function repeatFetch(event) {
        event.preventDefault();
        let selectedBreed = document.getElementById("breedInput").value;
        let url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
        getImage(url);
        $('.picturesContainer').empty();
    });
}

function displayDogs(responseJson) {
    $('.picturesContainer').show()
    $('.picturesContainer')
    .append(`<img src="${responseJson.message}" class="results-img">`);
    console.log(responseJson.message);
}

$(function initialize() {
    console.log("waiting for user selection");
    handleButtonSubmit();
})