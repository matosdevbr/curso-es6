class Cadeira {
    constructor(qtdePernas, giratoria, cor) {
        this.qtdePernas = qtdePernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira() {
        if (this.giratoria === true) {
            console.log('Cadeira girando')
        }
        else {
            console.log('Cadeira não é giratória')
        }
    }
}

let cadeira = new Cadeira(4, false, 'azul')
let cadeira2 = new Cadeira(1, true, 'vermelha')

let cadeiras = Array()

cadeiras.push(new Cadeira(4, false, 'azul'))
cadeiras.push(new Cadeira(1, true, 'vermelha'))
// console.log(cadeira)
// console.log(cadeira2)
cadeira.girarCadeira()