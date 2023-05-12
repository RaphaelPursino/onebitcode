const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//adicionar elementos
// push - adiciona elementos no final da lista

arr.push("Boromir")
console.log(arr)

//unshift - adiciona elementos no começo da lista

arr.unshift("Boromir")
console.log(arr)

//remover elementos
//pop - remove o último elemento da lista, não precisamos inserir valor

arr.pop()
console.log(arr)

//shift - remove o primeiro elemento da lista, não precisamos inserir valor

arr.shift()
console.log(arr)

//pesquisar por um elemento
//includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexOf - vai dizer em qual índice
const indice = arr.indexOf("Gandalf")
console.log(indice)

//cortar e concatenar
//slice - cria uma cópia de uma parte do array
const hobbits = arr.slice(0, 4) //não pega o índice 4, apenas o 0, 1, 2, 3
const outros = arr.slice(-4) //vai contar ao contrário até o final da lista e não até o começo
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat - para juntar dois arrays
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//substituição dos elementos
//splice - vai remover um grupo de elementos do array e susbstituir esse grupo por outros elementos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
//primeiro indicamos o que queremos substituir, a quantidade, e o que queremos inserir
console.log(sociedade)
console.log(elementosRemovidos)

//iterar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}
