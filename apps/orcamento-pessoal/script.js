const modalAlertTitle = document.getElementById('modal-alert-title')
const modalAlertBody = document.getElementById('modal-alert-body')
const modalAlertHeader = document.getElementById('modal-alert-header')
const modalAlertFooter = document.getElementById('modal-alert-footer')
let modalAlert = null


function showModalAlert(title, body, header, footer) {


    if (!modalAlert) {
        modalAlert = new bootstrap.Modal('#modal-alert', {
            keyboard: false
        })
    }

    modalAlertTitle.innerHTML = title
    modalAlertBody.innerHTML = body
    modalAlertHeader.className = header
    modalAlertFooter.className = footer


    modalAlert.show()
}

// ------------------------------------------------------------------

class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor

    }

    validarDados() {
        for (let i in this) {
            if (this[i] === undefined || this[i] === '' || this[i] === null) {
                return false
            }
        }
        return true
    }
}

class Bd {

    constructor() {
        let id = localStorage.getItem('id')

        if (id === null) {
            localStorage.setItem('id', '0')
        }
    }

    getProximoId() {
        let currentId = localStorage.getItem('id')
        return parseInt(currentId) + 1
    }

    gravar(d) {
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros() {

        let despesas = []

        let id = localStorage.getItem('id')

        for (let i = 1; i <= id; i++) {
            let despesa = JSON.parse(localStorage.getItem(i))

            if (despesa === null) {
                continue
            }

            despesas.push(despesa)
        }
        return despesas
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
        valor.value
    )
    if (despesa.validarDados() === true) {
        showModalAlert(
            'Parabéns',
            'A despesa foi cadastrada com sucesso!',
            'modal-header text-success',
            'btn btn-success'
        )
        bd.gravar(despesa)
    } else {
        showModalAlert(
            'Oops!',
            'Existem campos obrigatórios que não foram preenchidos.',
            'modal-header text-danger',
            'btn btn-danger'
        )
    }
}


// ---------------------------------------------------------------------------------


function carregarListaDespesas() {
    let despesas = Array()

    despesas = bd.recuperarTodosRegistros()

    let listaDespesas = document.getElementById('listaDespesas')

    despesas.forEach(function (d) {
        let linha = listaDespesas.insertRow()

        linha.insertCell(0)
        linha.insertCell(1)
        linha.insertCell(2)
        linha.insertCell(3)
        linha.insertCell(4)
        linha.insertCell(5)
    })


}











