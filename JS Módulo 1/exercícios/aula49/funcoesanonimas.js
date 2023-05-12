function somar(a, b) {
    return a + b
}

const operacao = somar //devemos colocar a função sem os parenteses, pois não queremos executá-la e sim armazenar em uma variável

console.log(operacao(4, 5))

const subtrair = function (a, b) { //essa é uma função anonima, ela não tem nome, ela é apenas armazenada em uma variável
    return a - b
}

console.log(subtrair(36, 13))

olaMundo()
oiMundo()

function olaMundo() { //essa função vai ser executada
    console.log("Olá, mundo!")
}

const oiMundo = function () { //essa função não vai ser executada, pois funções anonimas só podem ser executadas depois da inicialização
    console.log("Oi, mundo")
}