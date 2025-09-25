class Cachorro {
    constructor() {
        this.cor = 'Branco e marrom'
        this.tamanho = 30
        this.orelhas = 'Grandes e caídas'
    }

    correr() {
        console.log('Correndo')
    }

    dormir() {
        console.log('Dormindo')
    }

    rosnar() {
        console.log('Rosnando')
    }
}

class Passaro {
    constructor() {
        this.cor = 'Branco e marrom'
        this.tamanho = 10
        this.bico = 'Curto'
    }

    voar() {
        console.log('Voando')
    }

    dormir() {
        console.log('Dormindo')
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()

console.log(cachorro)
console.log(passaro)