class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir() {
        console.log('Dormindo')
    }
}

class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.bico = bico
    }

    voar() {
        console.log('Voando')
    }
}

class Papagaio extends Passaro {
    constructor(falante, cor, tamanho, peso) {
        super('medio', cor, tamanho, peso)
        this.falante = falante
    }

    falar() {
        console.log('Falando')
    }
}

let papagaio = new Papagaio(true, 'Verde', '25', '370')
console.log(papagaio)


let papagaio2 = new Papagaio(false, 'Vermelho', '10', '150')
console.log(papagaio2)



