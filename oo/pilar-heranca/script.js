class Animal {
    constructor() {
        this.cor = 'blue'
        this.tamanho = 10
        this.peso = 50
    }

    dormir() {
        console.log('Dormindo')
    }
}

class Cachorro extends Animal {
    constructor() {
        super();
        this.orelhas = 'Grandes e caídas'
    }

    correr() {
        console.log('Correndo')
    }

    rosnar() {
        console.log('Rosnando')
    }
}

class Passaro extends Animal {
    constructor() {
        super()
        this.bico = 'Curto'
    }

    voar() {
        console.log('Voando')
    }
}

class Papagaio extends Passaro {
    constructor() {
        super()
        this.falante = true
    }

    falar() {
        console.log('Falando')
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()

console.log(cachorro)
console.log(passaro)
console.log(papagaio)

cachorro.dormir()
passaro.dormir()
papagaio.falar()
papagaio.dormir()
papagaio.voar()

