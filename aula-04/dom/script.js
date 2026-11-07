// document.getElementById("paragraph") 
// puxa o elemento pelo id
// const paragraph = document.getElementById("paragraph")
// atribui o valor do elemento para uma variavel

// const paragraph02 = document.getElementById("paragraph-02")
// const paragraph03 = document.getElementById("paragraph-03")
// const paragraph04 = document.getElementById("paragraph-04")

// console.log(paragraph);
// console.log(paragraph02);
// console.log(paragraph03);
// console.log(paragraph04);

// alterando valores de texto com dom

// const title = document.getElementById("title")
// // cria uma variavel para o elemento chamado

// title.innerText = "Título Secundário"
// altera o valor de texto 

// alterando estilos de elementos html com dom

// const paragraph = document.getElementById("paragraph")
// cria uma variavel para o elemento mencionado

// paragraph.style.color = "blue" // estiliza a cor de texto do elemento
// paragraph.style.fontSize = "50px" // altera o tamanho da fonte do texto do elemento
// paragraph.style.backgroundColor = "Aqua" // altera a cor de fundo do elemento

// const paragraph = document.getElementById("paragraph")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", () => {
//     paragraph.innerText = "Deu bom!",
//     paragraph.style.color = "blue"
// })
// adiciona um evento para o botao

// exercicio #01
const paragraph = document.getElementById("paragraph")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    paragraph.innerText = "Texto calvado com sucesso!"
})