
'A Arrow function é usada para substituir a palavra function colocando apenas os parâmetros'
let ex1 = (x, y) => {
    return x * y
}

'Se apenas um parâmetro é utilizado, não é necessário os parênteses'

let ex2 = x => {
    return x * x
}

'A não ser que não existam parâmetros, então os parênteses serão necessários'

let ex3 = () => {
    return x * x
}

'Mas pode ser encrita de forma mais enxuta ainda'
let ex4 = x => x * x

let parOuImpar = numero => numero % 2 === 0? 'par' : 'ímpar' //return implícito
numero = prompt('Escreva um número')
alert(parOuImpar(numero))

document.write(ex3(2, 2) + '<br>')
document.write(ex4(2, 2) + '<br>')
document.write(ex2(2))