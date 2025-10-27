// let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

// let [a, b, , c] = frutas // pular um índice
// let [a, b = 'Abacate', c, d, e = 'Banana'] = frutas // substituir um valor

// console.log(a, b, c, d, e)

let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'], ['José', 'Maria']]

let [, [, n2]] = coisas
let [[, , fruta]] = coisas

console.log(n2)
console.log(fruta)