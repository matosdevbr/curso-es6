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
    constructor(bico, cor, tamanho, peso, voador) {
        super(cor, tamanho, peso)
        this.bico = bico
        this.voador = voador
    }

    voar() {
        if (this.voador === true) {
            console.log('Voando')
        }
    }
}

class Papagaio extends Passaro {
    constructor(bico, voador, falante, cor, tamanho, peso) {
        super(bico, voador, cor, tamanho, peso)
        this.falante = falante
    }

    falar() {
        console.log('Falando')
    }
}

class Avestruz extends Passaro {
    constructor(bico, voador, sabeCorrer, cor, tamanho, peso, pescoco) {
        super(bico, voador, cor, tamanho, peso)
        this.sabeCorrer = sabeCorrer
        this.pescoco = pescoco
    }

    correr() {
        if (this.sabeCorrer === true) {
            console.log('Correndo')
        }
    }

    enterrarCabeca() {
        if (this.pescoco === 'Longo') {
            console.log('Consegue enterrar a cabeca')
        }
    }
}


let papagaio = new Papagaio('Medio', true, true, 'Verde', 25, 370)
console.log(papagaio)
let avestruz = new Avestruz('Grande', false, true, 'Marrom', 150, 20000, 'Longo')
console.log(avestruz)

papagaio.dormir()
papagaio.voar()
papagaio.falar()

avestruz.dormir()
avestruz.voar()
avestruz.correr()
avestruz.enterrarCabeca()