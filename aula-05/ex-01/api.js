const nome = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const website = document.getElementById("website")
const company = document.getElementById("company_name")

fetch("https://jsonplaceholder.typicode.com/users")

.then((res) => res.json())
.then((data) => {
    console.log(data);
    console.log(data);
    nome.innerText = data[6].name
    email.innerText = data[6].email
    phone.innerText = data[6].phone
    website.innerText = data[6].website
    company.innerText = data[6].company.name
})