let pessoa = {
    nome: "Raphael",
    idade: 27,
    dizerOla() { //para criar a função dentro de objetos não usamos function
        console.log("Ola, mundo!")
    }
}

console.log(pessoa)
pessoa.dizerOla()