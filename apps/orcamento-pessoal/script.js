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
            if (this[i] == undefined || this[i] == '' || this[i] == null) {
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
            localStorage.setItem('id', 0)
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(d) {
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros() {

        //array de despesas
        let despesas = Array()

        let id = localStorage.getItem('id')

        //recuperar todas as despesas cadastradas em localStorage
        for (let i = 1; i <= id; i++) {

            //recuperar a despesa
            let despesa = JSON.parse(localStorage.getItem(i))

            //existe a possibilidade de haver índices que foram pulados/removidos
            //nestes casos nós vamos pular esses índices
            if (despesa === null) {
                continue
            }

            despesas.push(despesa)
        }

        return despesas
    }

    pesquisar(despesa) {

        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperarTodosRegistros()

        console.log(despesasFiltradas)
        console.log(despesa)

        if (despesa.ano !== '') {
            console.log(despesasFiltradas.filter(d => d.ano === despesa.ano))
        } if (despesa.mes !== '') {
            console.log(despesasFiltradas.filter(d => d.mes === despesa.mes))
        } if (despesa.dia !== '') {
            console.log(despesasFiltradas.filter(d => d.dia === despesa.dia))
        } if (despesa.tipo !== '') {
            console.log(despesasFiltradas.filter(d => d.tipo === despesa.tipo))
        } if (despesa.descricao !== '') {
            console.log(despesasFiltradas.filter(d => d.descricao === despesa.descricao))
        } if (despesa.valor !== '') {
            console.log(despesasFiltradas.filter(d => d.valor === despesa.valor))
        }

        return despesa
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
}

function carregaListaDespesas() {

    let despesas = Array()

    despesas = bd.recuperarTodosRegistros()

    /*

    <tr>
        <td>15/03/2018</td>
        <td>Alimentação</td>
        <td>Compras do mês</td>
        <td>444.75</td>
    </tr>

    */

    let listaDespesas = document.getElementById("listaDespesas")

    despesas.forEach(function (d) {

        //Criando a linha (tr)
        let linha = listaDespesas.insertRow();

        //Criando as colunas (td)
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

        //Ajustar o tipo
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
                break

        }
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor
    })

}

function pesquisarDespesas() {

    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

    let despesas = bd.pesquisar(despesa)

    despesas.forEach(function (d) {

        //Criando a linha (tr)
        var linha = listaDespesas.insertRow();

        //Criando as colunas (td)
        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

        //Ajustar o tipo
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
                break
        }
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor
    })
}