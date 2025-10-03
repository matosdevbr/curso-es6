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
            console.log('O pássaro está voando')
        }
        else {
            console.log('O pássaro não voa')
        }
    }

}

class Papagaio extends Passaro {
    constructor(bico, voador, falante, cor, tamanho, peso) {
        super(bico, voador, cor, tamanho, peso)
        this.falante = falante
    }

    falar() {
        if (this.falante === true) {
            console.log('Falando')
        }
        else {
            console.log('Não sabe falar')
        }
    }
}

class Avestruz extends Passaro {
    constructor(bico, voador, pescoco, cor, tamanho, peso) {
        super(bico, voador, cor, tamanho, peso)
        this.pescoco = pescoco
    }

    enterrarCabeca() {
        if (this.pescoco === 'longo') {
            console.log('O avestruz está enterrando a cabeca')
        }
    }
}


let papagaio = new Papagaio('Medio', 'Verde', true, 25, 370, true)
console.log(papagaio)
let avestruz = new Avestruz('Grande', 'Branco e marrom', 'longo', 150000, 140, false)
console.log(avestruz)

papagaio.voar()
papagaio.falar()

avestruz.enterrarCabeca()
avestruz.voar()