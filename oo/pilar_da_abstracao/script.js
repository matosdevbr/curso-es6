'Modelo do objeto'

class ContaBancaria {
//     agencia
//     numeroConta
//     saldo
//     limite
    constructor() {
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = this.saldo
    }

    depositar(valorDeposito) {
        if (valorDeposito > 0) {
            this.saldo += valorDeposito
            alert('você depositou ' + valorDeposito)
        } else {
            alert('Depósito inválido')
        }
        return this.saldo
    }

    sacar(valorSaque) {
        if (valorSaque > 0 && valorSaque <= this.saldo + this.limite) {
            this.saldo -= valorSaque
        } else {
            alert('Saque não permitido')
        }
    }

    consultarSaldo() {
        return this.saldo
    }
}


let x = new ContaBancaria()
let y = new ContaBancaria()


console.log(x.consultarSaldo())
x.depositar(450)
console.log(x.consultarSaldo())
x.sacar(200)
console.log(x.consultarSaldo())