function calcular(a, b, operacao) {
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b) //somar(3, 5)
    return resultado
}

function somar(a, b) {
    console.log("Realizando uma soma")
    return x + y
}

console.log(calcular(3, 5, somar)) //chamo a função sem colocar parenteses

//também podemos usar uma função anonima como parametro

console.log(calcular(8, 4, function (x, y) {
    console.log("Realizando uma subtração.")
    return x - y
}))

function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maça", "Banana", "Laranja", "Limão"]

for (let i = 0; i < lista.length;  i++) {
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento) //também conseguimos substituir o for desta forma.

lista.forEach(function (elemento, indice, array) { //outra forma de executar
    console.log({
        elemento,
        indice,
        array
    })
})