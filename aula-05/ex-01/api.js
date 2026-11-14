// const nome = document.getElementById("name")
// const email = document.getElementById("email")
// const phone = document.getElementById("phone")
// const website = document.getElementById("website")
// const company = document.getElementById("company_name")

const container = document.getElementById("container")

fetch("https://jsonplaceholder.typicode.com/users")

.then((res) => res.json())
.then((data) => {
    console.log(data);
    data.forEach(user => {
        const card = document.createElement("div")
        card.className = "box"
        card.innerHTML = `
            <p>Name: ${user.name}</p>
            <p>E-mail: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Company: ${user.company.name}</p>
        `
        container.appendChild(card)
    })
    // nome.innerText = data[6].name
    // email.innerText = data[6].email
    // phone.innerText = data[6].phone
    // website.innerText = data[6].website
    // company.innerText = data[6].company.name
})