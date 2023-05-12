function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value
    // o .value vai pegar o valor que foi digitado dentro do input  
    
    const confirmation = confirm("Escalar " + name + " como " + position + "?")

    if (confirmation) {
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + number
        playerItem.innerText = position + ": " + name + " (" + number + ")"
        teamList.appendChild(playerItem)
        
        document.getElementById('position').value = '' //irá deixar o input vazio
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }

    //console.log({ positon, name, number }) 
    //quando usamos as chaves dentro do console.log, irá exibir em forma de objeto no console, deixando mais organizado.
}

function removePlayer() {
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    const confimation = confirm('Remover o jogador ' + playerToRemove.innerText + '?')

    if (confimation) {
        document.getElementById('teamList').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
        
    }
}