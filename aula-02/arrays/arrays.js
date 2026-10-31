// arrays

// let idades = [15, 23, 21, 28, 17]
// console.log(idades);
// console.table(idades); // exibe uma tabela com os valores e o index de cada

// console.log(idades[0]); // 15
// console.log(idades[1]); // 23
// console.log(idades[2]); // 21
// console.log(idades[3]); // 28
// console.log(idades[4]); // 17

// let frutas = [
//     "Morango",
//     "Uva",
//     "Maça",
//     "Pera"
// ]

// frutas.unshift("Morango") // adiciona um item no começo da lista
// frutas.push("Uvaia") // adiciona um item no fim da lista
// frutas.splice(2, 0, "Acerola") // recebe 3 valores, o index onde será posicionado, quantos itens quer deletar a partir do index definido antes e o nome
// frutas.pop() // deleta o ultimo item da lista  (pera)
// frutas.shift() // deleta o primeiro item da lista (morango)
// frutas.splice(1, 3) // remove os itens da lista, a partir do index 1 e 3 itens(uva, maca e pera )
// console.log(frutas.length); // mostra a quantidade de elmentos contidos na lista

let nomes = [
    "Matheus",
    "Ana",
    "Igor"
]

nomes.forEach((elemento) => {
    console.log(`Bom dia ${elemento}`);
})
