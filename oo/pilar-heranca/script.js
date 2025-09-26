class Animal {
    constructor() {
        this.cor = prompt('Digite a cor do seu animal')
        this.tamanho = prompt('Digite o tamanho do seu animal')
        this.peso = prompt('Digite o peso do seu animal')
    }

    vetertinario(especie) {
        especie = prompt('Digite a espécie do seu animal')

        if (especie === 'Cachorro') {
            document.innerHTML(cachorro).getElementById('body')
        }
        if (especie === 'Passaro') {
            document.innerHTML(passaro).getElementById('body')
        }
        if (especie === 'Papagaio') {
            document.innerHTML(papagaio).getElementById('body')
        } else {
            alert('Escolha uma espécie válida')
        }
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
Animal.veterinario()

