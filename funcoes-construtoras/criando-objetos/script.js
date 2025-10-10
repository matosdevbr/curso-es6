let Carro = () => {
    this.cor = 'Amarelo'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = () => {
        // this.acelerar += 10
        let velocidade = this.getVelocidadeAtual() + 10
        this.velocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = () => {

        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = (velocidadeAtual) => {
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro = new Carro()