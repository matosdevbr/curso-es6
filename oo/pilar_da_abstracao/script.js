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

let valorBtnEl = document.getElementById('depositarValor');


let x = new ContaBancaria()
let y = new ContaBancaria()
window.onload = () => {
    document.getElementById('saldoAtual').value = (x.consultarSaldo())
}
valorBtnEl.onclick = () => {
    let valorDeposito = Number(document.getElementById('valorDeposito').value)
    if (valorDeposito <= 0) {
        console.log('Valor inválido')
    } else (x.depositar(valorDeposito) > x.saldo - valorDeposito)
    {
        x.depositar(valorDeposito)
        document.getElementById('saldoAtual').value = (x.consultarSaldo())
        valorDeposito = 0
    }
}