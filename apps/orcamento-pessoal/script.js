class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor

    }
}

// class Bd {
//     constructor() {
//         let id = localStorage.getItem('id')
//         if (id === null) {
//             localStorage.setItem('id', '0')
//         }
//     }
//
//     getProximoId() {
//         let proximoId = localStorage.getItem('id') || null/ 0 // null
//         return parseInt(proximoId) + 1
//     }
//
//     gravar(d) {
//         let id = this.getProximoId()
//
//         localStorage.setItem(id, JSON.stringify(d))
//
//         localStorage.setItem('id', id)
//     }
// }

class Bd {
    constructor() {
        if (localStorage.getItem('id') === null) {
            localStorage.setItem('id', '0') // salve como string
        }
    }

    getProximoId() {
        const atual = parseInt(localStorage.getItem('id') || '0', 10)
        return atual + 1
    }

    gravar(d) {
        const id = this.getProximoId()
        localStorage.setItem(String(id), JSON.stringify(d))
        localStorage.setItem('id', String(id))
    }
}

let bd = new Bd()

function cadastrarDespesa() {
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')


    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value)
    bd.gravar(despesa)
}