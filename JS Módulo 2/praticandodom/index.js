function addContact() {
    const contactSection = document.getElementById('contacts-list')
    
    const h3 = document.createElement('h3') //criamos e adicionamos um texto em H3
    h3.innerText = "Contato"
    
    const ul = document.createElement('ul') //criamos uma lista

    const nameLi = document.createElement('li') //criamos um item para lista
    nameLi.innerText = "Nome: " //adicionamos um nome para o item na lista
    const nameInput = document.createElement('input') //adicionamos um input no item
    nameInput.type = 'text' //adicionamos um tipo texto no input
    nameInput.name = 'fullname' //adicionamos um nome para o input
    nameLi.appendChild(nameInput) //colocamos o input dentro do item da lista
    ul.appendChild(nameLi) //colocamos o item da lista dentro da lista
    ul.appendChild(document.createElement('br')) //adicionamos uma quebra de linha

    const phoneLi = document.createElement('li') //criamos um item para lista
    phoneLi.innerText = "Telefone: " //adicionamos um nome para o item na lista
    const phoneInput = document.createElement('input') //adicionamos um input no item
    phoneInput.type = 'text' //adicionamos um tipo texto no input
    phoneInput.name = 'phone' //adicionamos um nome para o input
    phoneLi.appendChild(phoneInput) //colocamos o input dentro do item da lista
    ul.appendChild(phoneLi) //colocamos o item da lista dentro da lista
    ul.appendChild(document.createElement('br')) //adicionamos uma quebra de linha

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label>'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br')) //podemos criar um elemento dentro de um appendChild

    contactSection.append(h3, ul) //quando utilizamos apenas o append conseguimos inserir na tela mais de um elemento
}

function removeContact() {
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1]) //vai remover o último da lista
    contactSection.removeChild(contacts[contacts.length - 1]) //vai remover o último da lista
}