// avião
// atributos cor e modelo

//obj literal

let a1 = {
    cor: 'Branco',
    modelo: 'Airbus a320',
    levantarVoo() {
        console.log('Levantando voo')
    }
}

let AviaoF = function () {
    this.cor = 'Branco';
    this.modelo = 'Boeing 787';
    this.levantarVoo = function () {
        console.log('Levantando voo')
    }
}

let a2 = new AviaoF()

class AviaoC {
    constructor() {
        this.cor = 'Vermelho'
        this.modelo = 'Embraer E-Jets'
    }

    levantarVoo() {
        console.log('Levantando voo')
    }
}

let a3 = new AviaoC()


console.log(a1)
console.log(a2)
console.log(a3)