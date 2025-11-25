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

    pesquisar(despesa) {
        let despesasFiltradas = this.recuperarTodosRegistros()
        console.log(despesasFiltradas)

        // ano
        if (despesa.ano !== '') {
            console.log('filtro de ano')
            despesasFiltradas = despesasFiltradas.filter(d => d.ano === despesa.ano)
        }
        // mes
        if (despesa.mes !== '') {
            console.log('filtro de mes')
            despesasFiltradas = despesasFiltradas.filter(d => d.mes === despesa.mes)
        }
        // dia
        if (despesa.dia !== '') {
            console.log('filtro de dia')
            despesasFiltradas = despesasFiltradas.filter(d => d.dia === despesa.dia)
        }
        // tipo
        if (despesa.tipo !== '') {
            console.log('filtro de tipo')
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo === despesa.tipo)
        }
        // descricao
        if (despesa.descricao !== '') {
            console.log('filtro de descrição')
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao === despesa.descricao)
        }
        // valor
        if (despesa.valor !== '') {
            console.log('filtro de valor')
            despesasFiltradas = despesasFiltradas.filter(d => d.valor === despesa.valor)
        }

        console.log(despesasFiltradas)
        return despesasFiltradas
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

        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        descricao.value = ''
        valor.value = ''

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
    let despesas = []

    despesas = bd.recuperarTodosRegistros()

    let listaDespesas = document.getElementById('listaDespesas')

    listaDespesas.innerHTML = ''

    despesas.forEach(function (d) {

        let linha = listaDespesas.insertRow()


        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`


        switch (d.tipo) {
            case '1':
                d.tipo = 'Alimentação'
                break
            case '2':
                d.tipo = 'Educação'
                break
            case '3':
                d.tipo = 'Lazer'
                break
            case '4':
                d.tipo = 'Saúde'
                break
            case '5':
                d.tipo = 'Transporte'
        }
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = `R$${d.valor}`
    })

    function converterTipo(tipo) {
        this.tipo = tipo

    }
}

function pesquisarDespesas() {
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value
    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)
    bd.pesquisar(despesa)

    let despesas = bd.pesquisar(despesa)

    let listaDespesas = document.getElementById('listaDespesas')
}