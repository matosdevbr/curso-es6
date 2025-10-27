
let tituloArtigo = 'Como utilizar o operador rest/spread'

console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])

//arrays

let listaCursos1 = ['NodeJS e MongoDB', 'ES6', 'TypeScript e Angular4']
let listaCursos2 = ['Multiplataforma Android/IOS', 'Introdução ao GNU/Linux']
let listaCursosCompleto = ['Web Completo', 'Android Completo', ...listaCursos1, ...listaCursos2]

console.log(listaCursosCompleto)

// objetos
let pessoa = {nome: 'João', idade: 27}
let clone = {endereco: 'Rua abc', ...pessoa}

console.log(clone)