
class Despesa {
    constructor() {
        this.ano = 0
        this.mes = 0
        this.dia = 0
        this.tipo = 0
        this.descricao = 0
        this.valor = 0
    }
}

function cadastrarDespesa() {
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    console.log(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)
}

let despesa = new Despesa()