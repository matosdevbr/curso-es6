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
        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)

        if (velocidade > this.velocidadeMaxima) {
            console.log('Chame o mecânico, por que o carro estragou')
            this.velocidadeAtual = null
        }
    }
}

let carro = new Carro()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade do carro é: ${carro.getVelocidadeAtual()}`)