let pessoa = {
    nome: 'Maria',
    idade: 25
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)

//-------------------

pessoa.sexo = 'Feminino'

console.log(pessoa)

pessoa.dizerOi = () => console.log(`Oi, tudo bem ${pessoa.nome}?`)

pessoa.dizerOi()