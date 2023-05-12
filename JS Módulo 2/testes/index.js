//Escreva um programa que peça ao usuário para digitar um número e, em seguida, imprima todos os números de 0 até esse número no console.

/*let numero = prompt("Digite um número: ")

for (let i = 0; i <= numero; i++) {
    console.log(i);
}*/

//Escreva um programa que peça ao usuário para digitar uma frase e, em seguida, conte o número de vogais nessa frase e imprima o resultado no console.

/*let frase = prompt("Digite uma frase: ")
let vogais = 0
for (let i = 0; i < frase.length; i++) {
    let letra = frase[i].toLowerCase()
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        vogais++
    }
}

console.log("A frase " + frase + " tem " + vogais + " vogais.")*/

//Escreva um programa que peça ao usuário para digitar uma palavra e, em seguida, verifique se essa palavra é um palíndromo (ou seja, se ela pode ser lida da mesma forma da esquerda para a direita e da direita para a esquerda) e imprima o resultado no console.

let palavra = prompt("Digite uma palavra: ")

let inversa = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    inversa += palavra[i]
}

if (palavra === inversa) {
    console.log("A palavra " + palavra + " é um palíndromo.")
} else {
    console.log("A palavra " + palavra + " não é um palíndromo.")
}