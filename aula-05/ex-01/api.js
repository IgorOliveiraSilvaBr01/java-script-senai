const nome = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const website = document.getElementById("website")
const company = document.getElementById("company")

fetch("https://jsonplaceholder.typicode.com/users")

.then((res) => res.json())
.then((data) => {
    console.log(data[3]);
})