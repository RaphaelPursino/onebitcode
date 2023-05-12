function calcularMedia(a, b) {
    const media = (a + b) / 2
    //console.log(media) //vai retornar 4 no console do navegador
    return media
}

//calcularMedia(3, 5)

//console.log(media) //não vai mostrar a média porque estamos selecionando a variável de dentro da função, devemos colocar a média dentro de uma variável fora da função.

const resultado = calcularMedia(3, 5)

console.log(resultado) //sem o return vai mostrar undefined, usamos retorn para trabalhar com valores fora da função

function criarProduto(nome, preco) {
    const produto = {
        nome, //nome: nome
        preco, //preco: preco
        estoque: 1
    }
    return produto
}

//const notebook = criarProduto("Notebook Intel Core i3 8GB", 2500)

//também podemos chamar a função dentro do console.log, sem armazenar em uma variável

console.log(criarProduto("Notebook Intel Core i3 8GB", 2500))

function areaRetangular(base, altura) {
    return base * altura
}

console.log(areaRetangular(3, 5))

function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}

console.log(areaQuadrada(9))

function ola() {
    let texto = "..."
    return texto
    texto = "Olá, mundo"
    console.log(texto)
}

console.log(ola())

function maioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maioridade(27))
console.log(maioridade(16))