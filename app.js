const htmlOutput = document.querySelector("#htmlOutput")
const characterCount = 826


// This creates the function with a for loop that will iterate through every character, then call the createCharacter function that we create next, passing the data that lets it work with information from the api.
async function fetchRequest() {
    for(let i = 1; i <= characterCount; i++) {
        // This fetches the api URL and sets it equal to the res variable. 
        const res = await fetch(`https://rickandmortyapi.com/api/character/${i}`)
        // This converts the information gathered from the api into JSON, the await is used to make sure it waits till the previous line has been completed.
        const apiData = await res.json()
        // This then calls the createCharacter function and passes the apiData into it so it can then create a character card.
        createCharacter(apiData)
    }
} 

// This creates the createCharacter function that is used to display the information for each character, and passes in RMCharacter which is the variable containing the apiData. 
const createCharacter = (RMCharacter) => {
        // This variable will create a div when called.
        const createCard = document.createElement("div")
        // This gives each of the cards created from the create card variable the class of "card"
        createCard.classList.add("card") 

        console.log(RMCharacter)

        // This creates HTMl within Javascript that can be inserted into another variable and back into the HTML file.
        const cardInnerHTML = `
        <div class="imageContainer">
            <img src="https://rickandmortyapi.com/api/character/avatar/${RMCharacter.id}.jpeg" alt="${RMCharacter.name}">
        </div>
        <div class="characterInfo">
            <span class="characterID">Char No.${RMCharacter.id}</span>
            <h3 class="characterName">${RMCharacter.name}</h3>
            <p class="characterSpecies"><b>Species:</b> ${RMCharacter.species}</p>
            <p class="characterStatus"><b>Status:</b> ${RMCharacter.status}</p>
            <p class="characterOrigin"><b>Origin:</b> ${RMCharacter.origin.name}</p>
        </div>
        `

        // This sets the html inside the created div to be equal to cardInnerHTML, creating a card for each character when it iterates through.
        createCard.innerHTML = cardInnerHTML
        // This then appends the created card to the htmlOutput div as a child. 
        htmlOutput.appendChild(createCard)
    
    }

fetchRequest()
