function addInput() {
    const ul = document.getElementById('inputs') //seleciona pelo id
  

    //cria uma linha com classe e texto
    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'Novo input: '
  

    //cria um input com tipo e nome
    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'
  

    //aqui nos adicionamos newinput dentro de newli, e newli dentro de ul
    newLi.appendChild(newInput)
    ul.appendChild(newLi)
  }