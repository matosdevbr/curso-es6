class Sofa {
    constructor(numLugares, cor, reclinavel) {
        this.numLugares = numLugares
        this.cor = cor
        this.reclinavel = reclinavel
    }

    reclinarSofa() {
        if (this.reclinavel === true) {
            console.log('Sofá reclinado')
        }
        else {
            console.log('Esse sofá não é reclinável')
        }
    }
}

let sofas = Array()

sofas.push(new Sofa(3, 'preto', true))
sofas.push(new Sofa(2, 'vermelho', false))
sofas[0].reclinarSofa()
