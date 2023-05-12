 function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
 }

 //dobro(5)

 function dizerOla(nome = "mundo") { //valor padrão definido
    alert("Olá, " + nome + "!")
 }

 //dizerOla("Raphael")
 //dizerOla()

 function soma(a, b, c, d, e) {
    alert("O resultado da soma é " + (a + b + c + d + e))
 }

 //soma(7, 6, 4, 1, 9)

 function criarUsuario(nome, email, senha, tipo) {
    const usuario = {
        nome, // mesmo que nome: nome
        email,
        senha,
        tipo
    }

    console.log(usuario)
 }

 criarUsuario("Isaac", "isaac@gmail.com", "1234") //a ordem é muito importante nos parametros

 function objetoComoParametro(usuario) {
    usuario.nome
    usuario.email
 }

 const dadosDoUsuario = { //caso as funções tenham muitos parametros
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereço: "",
    aniversario: ""
 }

 objetoComoParametro(dadosDoUsuario)

