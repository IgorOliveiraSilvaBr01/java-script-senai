const container = document.getElementById("container")

fetch("https://rickandmortyapi.com/api/character")
.then((res) => res.json())
.then((data) => {   
    console.log(data);
    data.results.forEach(character => {
        const card = document.createElement("div")
        card.className = "box"
        card.innerHTML = `
            <img src="${character.image}" />
            <p>Name: ${character.name}</p>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Type: ${character.type}</p>
        `

        container.appendChild(card)
    }) 
})