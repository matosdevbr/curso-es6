let Carro = function () {
    this.cor = 'Amarelo'
    this.modelo = 'Chevete'
    this.velocidadeMaxima = 180
    this.velocidadeAtual = 0


    this.acelerar = () => {
        let velocidade = this.getVelocidadeAtual() + 50
        if (velocidade > this.velocidadeMaxima) {
            velocidade = this.velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = function () {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function (velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }

}

let carro = new Carro()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)


let Carro2 = function () {
    let velocidadeMaxima = 180
    var quilometrosRodados = 0

    this.cor = 'Amarelo'
    this.modelo = 'Chevete'
    this.velocidadeAtual = 0


    this.acelerar = () => {
        let velocidade = this.getVelocidadeAtual() + 50
        if (velocidade > velocidadeMaxima) {
            velocidade = velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)

        setQuilometrosRodados(0.07)
        console.log(quilometrosRodados)
    }

    this.getVelocidadeAtual = function () {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function (velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }
    let setQuilometrosRodados = (q) => {
        quilometrosRodados += q
    }

}

let carro2 = new Carro2()
console.log(`A velocidade do carro é: ${carro2.getVelocidadeAtual()}`)
carro2.acelerar()
console.log(`A velocidade do carro é: ${carro2.getVelocidadeAtual()}`)

console.log(carro)
console.log(carro2)
