const arr = [
    "1º Nível",
    ["2º Nível", 42, true],
    [
        ["3º nível, 1º item", "Olá, mundo!"]
        ["3º nível, 2º item", "Oi, mundo!"]
    ]
    []
]

console.log(arr)
console.log(arr[0]) //vai exibir "1º Nível"
console.log(arr[1]) //vai exibir a lista inteira na posição 1
console.log(arr[1][0]) //vai exibir o primeiro item da lista na posição 1
console.log(arr[2]) //vai exibir o array com dois arrays dentro
console.log(arr[2][1]) //vai exibir as duas listas dentro do array
console.log(arr[2][1][0]) //vai exibir 3º nível, 2º item

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"]
]

console.table(matriz) //vai exibir em forma de tabela

matriz[0].push("Nova coluna") //vai inserir uma nova coluna no primeiro array

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const elemento = matriz[i][j]
        console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
}