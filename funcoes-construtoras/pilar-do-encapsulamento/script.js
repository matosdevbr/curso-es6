let Carro = function () {
    this.cor = 'Amarelo'
    this.modelo = 'Chevete'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.getVelocidadeAtual = function () {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function (velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }

    this.acelerar = () => {
        let velocidade = this.getVelocidadeAtual() + 50
        this.setVelocidadeAtual(velocidade)

        if (velocidade > this.velocidadeMaxima) {
            velocidade = this.velocidadeMaxima
        }
    }
}

let carro = new Carro()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)


let Carro2 = function () {
    let velocidadeMaxima = 180

    this.cor = 'Amarelo'
    this.modelo = 'Chevete'
    this.velocidadeAtual = 0


    this.getVelocidadeAtual = function () {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function (velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }

    this.acelerar = () => {
        let velocidade = this.getVelocidadeAtual() + 50
        this.setVelocidadeAtual(velocidade)

        if (velocidade > velocidadeMaxima) {
            velocidade = velocidadeMaxima
        }
    }
}

let carro2 = new Carro2()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)