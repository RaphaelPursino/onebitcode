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

/*let palavra = prompt("Digite uma palavra: ")

let inversa = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    inversa += palavra[i]
}

if (palavra === inversa) {
    console.log("A palavra " + palavra + " é um palíndromo.")
} else {
    console.log("A palavra " + palavra + " não é um palíndromo.")
}*/

//Escreva uma função chamada maiorNumero que receba dois números como parâmetros e retorne o maior entre eles.

/*function maiorNumero (a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

console.log("O maior número foi: " + maiorNumero(10, 7))*/

//Crie uma função chamada inverterString que receba uma string como parâmetro e retorne a mesma string, porém invertida.

/*function inverterString(palavra) {
    let palavraInversa = ""
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInversa += palavra[i]
    }
    return palavraInversa
}

console.log(inverterString("palavra"))*/


//Crie uma função chamada contarVogais que receba uma string como parâmetro e retorne o número de vogais presentes nessa string.


/*function contarVogais(palavra) {
    let vogais = ["a", "e", "i", "o", "u"]
    let contador = 0
    
    for (let i = 0; i < palavra.length; i++) {
        let minuscula = palavra[i].toLowerCase()
        if (vogais.includes(minuscula)) {
            contador++
        }
    }
    return contador
}

console.log(contarVogais("palavra"))*/

// Escreva um programa que recebe uma lista de números como entrada e os ordena em ordem crescente.

//let numbers = [5, 2, 9, 1, 3, 10, 20]

//numbers.sort(function(a, b) {
//    return a - b
//})

//console.log(numbers)

/*Nesse exercício, a função de comparação usada no método sort() é simplesmente function(a, b) { return a - b; }. Essa função compara dois números, a e b, e retorna a diferença entre eles.

Quando o método sort() chama essa função de comparação, ele compara dois elementos do array de cada vez. Se a for menor que b, a função retorna um valor negativo. Se a for maior que b, a função retorna um valor positivo. Se a for igual a b, a função retorna 0.

Essa função de comparação é comumente usada para ordenar números em ordem crescente. Ao retornar a diferença entre a e b, o sort() entende que deve colocar os elementos em uma ordem em que os números menores venham antes dos maiores.

Aqui está o exemplo completo do exercício 1 com a função de comparação: */




// Escreva um programa que recebe uma lista de números como entrada e retorna apenas os números primos presentes na lista.

/*let numbers = [7, 4, 11, 2, 9, 13]

let primeNumbers = []

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i]
    let isPrime = true
    
    if (number === 1) {
        isPrime = false
    } else {
        for (let j = 2; j < number; j++) {
            if (number % j === 0) {
                isPrime = false
                break
            }
        }
    }

    if (isPrime) {
        primeNumbers.push(number)
    }
}

console.log(primeNumbers)*/


// Escreva um programa que recebe uma string como entrada e realiza as seguintes manipulações:
// - Retorna a string invertida
// - Verifica se a string é um palíndromo
// - Conta o número de caracteres maiúsculos na string

/*let word = "JavaScript"

let palavraInvertida = ""

for (let i = word.length - 1; i >= 0; i--) {
    palavraInvertida += word[i]
}

console.log(palavraInvertida)

if (word === palavraInvertida) {
    console.log("A " + word + " é um palíndromo")
} else {
    console.log("A palavra " + word + " não é um palíndromo")
}

let contador = 0

for (let i = 0; i < word.length; i++) {
    if (word[i] >= "A" && word[i] <= "Z") {
        contador++
    }
}

console.log("Contagem de caracteres maiúsculos: " + contador)*/


// Escreva um programa que recebe uma senha como entrada e verifica se ela atende aos seguintes critérios:
// - Pelo menos 8 caracteres
// - Contém pelo menos um caractere maiúsculo e um caractere minúsculo
// - Contém pelo menos um número
// - Contém pelo menos um caractere especial (@, #, $, %, etc.)

/*let senha = "Senha123@"

function validarSenha(senha) {
    if (senha.length < 8) {
      return false;
    }
  
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
  
    for (let i = 0; i < senha.length; i++) {
      let char = senha[i];
      if (char >= "A" && char <= "Z") {
        hasUpperCase = true;
      } else if (char >= "a" && char <= "z") {
        hasLowerCase = true;
      } else if (char >= "0" && char <= "9") {
        hasNumber = true;
      }
    }
  
    return hasUpperCase && hasLowerCase && hasNumber;
  }
  
  // Exemplo de uso:
  let senha1 = "Abc12345";
  let senha2 = "senhafraca";
  
  console.log(validarSenha(senha1)); // true
  console.log(validarSenha(senha2)); // false*/

  
  //Escreva uma função que verifique se duas palavras são anagramas, ou seja, possuem as mesmas letras em ordem diferente.

  
  function verificarAnagrama(word1, word2) {
    // Remove espaços em branco e converte as palavras para letras minúsculas
    word1 = word1.toLowerCase().replace(/\s/g, '');
    word2 = word2.toLowerCase().replace(/\s/g, '');
  
    // Verifica se as palavras têm o mesmo número de letras
    if (word1.length !== word2.length) {
      return false;
    }
  
    // Converte as palavras em arrays de caracteres e ordena-os
    let sortedWord1 = Array.from(word1).sort().join('');
    let sortedWord2 = Array.from(word2).sort().join('');
  
    // Verifica se as palavras ordenadas são iguais
    return sortedWord1 === sortedWord2;
  }
  
  // Exemplo de uso:
  let palavra1 = "amor";
  let palavra2 = "roma";
  let palavra3 = "casa";
  let palavra4 = "sala";
  
  console.log(verificarAnagrama(palavra1, palavra2)); // true
  console.log(verificarAnagrama(palavra1, palavra3)); // false
  console.log(verificarAnagrama(palavra1, palavra4)); // false
  

/*Nesta solução, temos a função verificarAnagrama que recebe duas palavras como parâmetros e retorna um valor booleano indicando se as palavras são anagramas ou não. Agora, vamos explicar cada parte do código:

Primeiro, removemos os espaços em branco das palavras e as convertemos para letras minúsculas usando toLowerCase() e replace(/\s/g, '').

Verificamos se as palavras têm o mesmo número de letras. Se a quantidade de letras for diferente, sabemos que elas não podem ser anagramas e retornamos false.

Convertemos as palavras em arrays de caracteres usando Array.from() para que possamos ordená-los.

Ordenamos os arrays de caracteres usando o método sort() e, em seguida, os juntamos novamente em strings usando join(''). Isso resulta em duas strings com as letras das palavras em ordem alfabética.

Por fim, comparamos as strings ordenadas para verificar se são iguais. Se forem iguais, significa que as palavras são anagramas e retornamos true. Caso contrário, retornamos false. */



