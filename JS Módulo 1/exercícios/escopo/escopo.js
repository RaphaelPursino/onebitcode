let pokemon = "Charmander" //escopo mais externo

function evoluir() {
    pokemon = "Charmeleon" //escopo mais interno
}

console.log(pokemon) //vai mostrar a variável no escopo mais externo
evoluir() //vai mostrar a variável mais interna dentro da função
console.log(pokemon) //agora vai mostrar o valor da variável atualizado, pois quando chamamos a função, o valor da variável foi atualizado

function criarAnimal() {
    let animal = "Gato"
    return animal
}

criarAnimal()
console.log(criarAnimal())

function avaliarNota(nota) {
    if (nota > 60) {
        var aprovado = true
        let situacao = "Aprovado"
    } else {
        var aprovado = false
        let situacao = "Reprovado"
    }

    console.log(nota)
    console.log(aprovado)
    console.log(situacao)
}

avaliarNota(83)
avaliarNota(49)