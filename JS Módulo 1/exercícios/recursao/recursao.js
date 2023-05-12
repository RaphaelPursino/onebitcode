function dividir(num) {
    console.log(num)
    if (num % 2 === 0) { //se o número que foi escolhido for par, ele vai ser divido por 2, e assim repetidamente até que o número seja ímpar
        dividir(num / 2)
    } else {
        return num
    }
}

dividir(40)

//fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4
function fatorial(num) {
    console.log("Número: " + num)
    if (num === 0) { //caso base
        return 1
    } else if (num === 1){
        return 1
    } else {
        console.log(num + " * !" + (num - 1))
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))