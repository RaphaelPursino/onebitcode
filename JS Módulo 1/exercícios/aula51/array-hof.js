const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  //const nomes = []

  //for (let i = 0; i < personagens.length; i++) {
  //  nomes.push(personagens[i].nome)
  //}

  //Map

  const nomes = personagens.map(function (personagem) {
    return personagem.nome
  })

  console.log(nomes)

  //Filter

  //Uma forma de filtrar os elementos sem utilizar o filter

  //const orcs = []

  //for (let i = 0; i < personagens.length; i++) {
  //  if (personagens[i].raca === "Orc") {
  //   orcs.push(personagens[i])
  //  }
  //}

  const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
  })

  console.log(orcs)

  //Reduce

  //let nivelTotal = 0
  //for (let i = 0; i < personagens.length; i++) {
  //  nivelTotal += personagens[i].nivel
  //}

  const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
  }, 0) //valor inicial

  console.log(nivelTotal)

  const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
  }, {})

  console.log(racas)

  //Sort

  //personagens.sort(function (a, b) {
  //  return a.nivel - b.nivel
  //})

  //console.log(personagens)

  personagens.slice().sort(function (a, b) {
    return a.nivel - b.nivel
  })

  console.log(personagens)

  //o .slice corta uma parte do array e cria um novo array
  //se utilizarmos o .slice sem os parametros "()", nós vamos passar a cópia pro .sort e não mais o array original, com isso nós conseguimos armazenar em uma variável.









  
