class contaBancaria {
    //      numeroConta
    //      numeroConta
    //      saldo
    //      limite
    constructor(){
        this.agencia = 1075
        this.numeroConta = 8351125
        this.saldo = 50
        this.limite = 450
    }
    depositar(valorDeposito){
        this.saldo += valorDeposito
    }
    sacar(valorSaque){
        this.saldo = this.saldo - valorSaque
    }
}

let nomeTransferencia =