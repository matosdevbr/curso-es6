let nome = 'Henrique'
let idade = 13
let sexo = 'Masculino'
let profissao = 'Programador'

let objeto = {

    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,

    exibirResumo: function () {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo}, é ${this.profissao}`)
    }

}

console.log(objeto)
objeto.exibirResumo()

let objeto2 = {

    nome,
    idade,
    sexo,
    profissao,

    exibirResumo() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo}, é ${this.profissao}`)
    }

}

console.log(objeto2)
objeto2.exibirResumo()